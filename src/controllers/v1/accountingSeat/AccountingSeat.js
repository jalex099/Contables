import moment from 'moment'
import { AccountingSeatsModel, TransactionsModel, AccountsModel } from '../../../models'
const error = (message) => message
class AccountingSeat {
  static getTotalAmountOfAccountsList (accounts) {
    const totalAmount = accounts.reduce((prev, transaction) => {
      prev += transaction.amount
      return prev
    }, 0)
    return totalAmount
  }

  static getAccountsIds (accounts, fieldId) {
    return accounts.map(account => account[fieldId])
  }

  static isValidTransactions (transactions, accounts, type = 'debit') {
    try {
      return transactions.reduce((prev, transaction) => {
        let [account] = accounts.filter(account => String(account._id) === transaction.account_id)
        if (!account) throw error(`Not fount account with if ${transaction.account_id}`)
        // console.log('***** ACCOUNTS: ', type, accounts[0].simpleView())
        if (type === 'debit' && account.type === 'credit' && account.current_amount < transaction.amount) throw error(`Error in debit transaction: ${account.name} current_amount < ${transaction.amount}`)
        if (type === 'credit' && account.type === 'debit' && account.current_amount < transaction.amount) throw error(`Error in credit transaction: ${account.name} current_amount < ${transaction.amount}`)
        return prev
      }, true)
    } catch (error) {
      throw error
    }
  }

  static async applyTransactions (AccountingSeat, transactions, accounts, type = 'debit') {
    try {
      for await (const transaction of transactions) {
        let [account] = accounts.filter(account => String(account._id) === transaction.account_id)
        if (!account) throw error(`Not fount account with if ${transaction.account_id}`)
        const payload = {
          accounting_seat_id: AccountingSeat.simpleView().id,
          account_id: transaction.account_id,
          type,
          amount: transaction.amount
        }
        const transactionCreateResult = await TransactionsModel.create(payload)
        // console.log(transactionCreateResult)
        if (payload.type === 'debit') {
          if (account.type === 'debit') account.current_amount += transaction.amount
          else account.current_amount -= transaction.amount
        } else {
          if (account.type === 'credit') account.current_amount += transaction.amount
          else account.current_amount -= transaction.amount
        }

        const result = await account.save()
        console.log('UPDATE RESULT: ', account, result)
      }
    } catch (error) {
      throw error
    }
  }

  static async create (payload) {
    try {
      const creditTransactions = payload.credit
      const debitTransactions = payload.debit
      const totalCredit = AccountingSeat.getTotalAmountOfAccountsList(creditTransactions)
      const totalDebit = AccountingSeat.getTotalAmountOfAccountsList(debitTransactions)
      const creditAccountIds = AccountingSeat.getAccountsIds(creditTransactions, 'account_id')
      const debitAccountIds = AccountingSeat.getAccountsIds(debitTransactions, 'account_id')

      if (totalCredit !== totalDebit) throw error(`Total Credit and total debit need to be a identity`)
      const debitAccounts = await AccountsModel.find({_id: {$in: debitAccountIds}})
      const creditAccounts = await AccountsModel.find({_id: {$in: creditAccountIds}})
      const isDebitValidationSuccess = AccountingSeat.isValidTransactions(debitTransactions, debitAccounts, 'debit')
      const isCreditValidationSuccess = AccountingSeat.isValidTransactions(creditTransactions, creditAccounts, 'credit')

      delete payload.credit
      delete payload.debit

      payload.date = moment(payload.date, 'YYYY-MM-DDTHH-mm-ss').format()
      const createResult = await AccountingSeatsModel.create(payload)
      await AccountingSeat.applyTransactions(createResult, debitTransactions, debitAccounts, 'debit')
      await AccountingSeat.applyTransactions(createResult, creditTransactions, creditAccounts, 'credit')
      return payload
    } catch (error) {
      throw error
    }
  }

  static async setTransactions (seats) {
    try {
      seats = seats.map(seat => {
        return seat.simpleView()
      })
      const seatsIds = seats.map(seat => String(seat.id))
      let transactions = await TransactionsModel.find({accounting_seat_id: {$in: seatsIds}})
      const transactionIds = transactions.map(transaction => String(transaction.account_id))
      const accounts = await AccountsModel.find({_id: {$in: transactionIds}})
      transactions = transactions.map(transaction => {
        transaction = transaction.simpleView()
        const [account] = accounts.filter(account => String(account._id) === transaction.account_id)
        transaction.account_name = (account) ? account.name : null
        return transaction
      })
      seats = seats.map(seat => {
        const credit = transactions.filter(transaction => transaction.accounting_seat_id === String(seat.id) && transaction.type === 'credit')
        const debit = transactions.filter(transaction => {
          return (transaction.accounting_seat_id === String(seat.id) && transaction.type === 'debit')
        })
        seat.credit = credit
        seat.debit = debit
        return seat
      })
      return seats
    } catch (error) {
      console.log(error)
      return seats
    }
  }
}

export default AccountingSeat
