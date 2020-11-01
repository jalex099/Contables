import { AccountsModel } from '../../../models'

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
}

export default Account
