import { AccountingSeatModel, TransactionsModel } from '../../../models'
const error = (message) => message
class AccountingSeat {
  static getTotalAmountOfAccountsList (accounts) {
    const totalAmount = accounts.reduce((prev, transaction) => {
      prev += transaction.amount
      return prev
    }, 0)
    return totalAmount
  }

  static async create (payload) {
    try {
      const creditTransactions = payload.credit
      const debitTransactions = payload.debit
      const totalCredit = AccountingSeat.getTotalAmountOfAccountsList(creditTransactions)
      const totalDebit = AccountingSeat.getTotalAmountOfAccountsList(debitTransactions)
      console.log(totalCredit, totalDebit)

      if (totalCredit !== totalDebit) throw error(`Total Credit and total debit need to be a identity`)
      delete payload.credit
      delete payload.debit
      return payload
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default AccountingSeat
