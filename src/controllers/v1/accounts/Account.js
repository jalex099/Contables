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

      account.transactions = transactions.map(transaction => {
        const [seat] = seats.filter(seat => String(seat._id) === transaction.accounting_seat_id)
        return {
          type: transaction.type,
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

  static async getBalance (accounts) {
    try {
      let income = accounts[3].current_amount
      let costs = accounts[4].current_amount
      let expenses = accounts[5].current_amount
      let grossProfit = income - costs
      let utilityOperation = grossProfit - expenses
      let legalReserve = utilityOperation * 0.07
      let utilityBeforeToTaxes = utilityOperation - legalReserve
      const tax = (utilityBeforeToTaxes > 50000) ? 0.30 : 0.25
      let taxToPay = utilityBeforeToTaxes * tax
      let netProfit = utilityBeforeToTaxes - taxToPay

      const balance = {
        active: accounts[0],
        passive: accounts[0],
        capital: accounts[0],
        legalReserve,
        taxToPay,
        netProfit
      }
      return balance
    } catch (error) {
      console.log(error)
      return null
    }
  }
}

export default Account
