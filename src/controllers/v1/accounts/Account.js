import { AccountsModel, TransactionsModel, AccountingSeatsModel } from '../../../models'

class Account {
  static organize (accountsList, accountsOrganized = []) {
    try {
      accountsList = Account.parse(accountsList)
      const principalAccounts = accountsList.filter(account => account.parent_id === '0')
      accountsOrganized = principalAccounts
      accountsOrganized = accountsOrganized.map(account => {
        account = Account.setSubcategories(accountsList, account)
        return account
      })
      return accountsOrganized
    } catch (error) {
      console.log(error)
      return accountsList
    }
  }

  static parse (accountsList) {
    const accountsListParsed = accountsList.map(account => {
      const {_id, name, current_amount: currentAmount, type, parent_id: parentId} = account
      return {
        _id,
        name,
        current_amount: currentAmount,
        type,
        parent_id: parentId
      }
    })
    return accountsListParsed
  }

  static setSubcategories (accountsList, account) {
    try {
      const subAccounts = accountsList.filter(category => {
        return category.parent_id === String(account._id)
      })
      account.sub_accounts = subAccounts.map(account => {
        account = Account.setSubcategories(accountsList, account)
        return account
      })
      const subCategoryTotal = subAccounts.reduce((prev, account) => {
        prev += account.current_amount
        return prev
      }, 0)
      account.current_amount += subCategoryTotal
      return account
    } catch (error) {
      console.log(error)
      return account
    }
  }

  static async isAlreadySaved (payload) {
    try {
      const {parent_id: parentId, name} = payload
      console.log(parentId, name)
      const searchResult = await AccountsModel.find({parent_id: parentId, name})

      return searchResult.length > 0
    } catch (error) {
      return true
    }
  }

  static async setTransactions (account) {
    try {
      const transactions = await TransactionsModel.find({account_id: account._id}).sort({date: 'desc'})
      const seatIds = transactions.map(transaction => String(transaction.accounting_seat_id))
      const seats = await AccountingSeatsModel.find({_id: {$in: seatIds}})

      const credit = transactions.filter(transaction => transaction.account_id === String(account._id) && transaction.type === 'credit')
      const debit = transactions.filter(transaction => transaction.account_id === String(account._id) && transaction.type === 'debit')

      account.transactions = {credit: [], debit: []}
      account.transactions.credit = credit.map(transaction => {
        const [seat] = seats.filter(seat => String(seat._id) === transaction.accounting_seat_id)
        return {
          date: seat.date,
          seat: seat.description,
          amount: transaction.amount
        }
      })
      account.transactions.debit = debit.map(transaction => {
        const [seat] = seats.filter(seat => String(seat._id) === transaction.accounting_seat_id)
        return {
          date: seat.date,
          seat: seat.description,
          amount: transaction.amount
        }
      })
      return account
    } catch (error) {
      console.log(error)
      return account
    }
  }
}

export default Account
