import { Router } from 'express'
import Response from '../../../services/response/Response'
import { AccountsModel } from '../../../models'
import { paginateOptions } from '../../../utils/mongoose/paginate'
import { isAllPropertiesInObject } from '../../../utils/operations'
import Account from './Account'

class AccountsController {
  static getRouter () {
    const router = new Router()

    router.get('/', AccountsController.list)
    router.post('/', AccountsController.create)
    router.delete('/:accountId', AccountsController.delete)

    return router
  }

  static async list (req, res, next) {
    try {
      const { filter, options } = paginateOptions(req.query)
      let accounts = await AccountsModel.paginate(filter, options)
      accounts.items = Account.organize(accounts.items)
      return Response.success(res, accounts)
    } catch (error) {
      return Response.badRequest(res, {message: 'bad request'})
    }
  }

  static async create (req, res, next) {
    try {
      const { body } = req
      const requireFields = ['name']
      let payload = {}
      payload.current_amount = 0
      payload.name = body.name
      if (!Object.keys(body).length) return Response.badRequest(res, 'Not found data')
      if (!isAllPropertiesInObject(body, requireFields)) return Response.badRequest(res, `These fields are required to these operation: ${requireFields.join(',')}`)
      if (body.parent_id) {
        const parentAccount = await AccountsModel.findById(body.parent_id)

        if (!parentAccount) return Response.notFound(res, 'Not found parent account')
        payload.parent_id = parentAccount._id
        payload.type = parentAccount.type
      } else {
        if (!body.type) return Response.badRequest(res, 'type is required to principal account')
        if (body.type !== 'debit' && body.type !== 'credit') return Response.dataValidationFailed(res, 'account type only is debit or credit')
        payload.type = body.type
        payload.parent_id = '0'
      }
      if (await Account.isAlreadySaved(payload)) return Response.unauthorized(res, `Account is already saved, you can't create a copy`)
      const result = await AccountsModel.create(payload)
      return Response.successCreate(res, result)
    } catch (error) {
      return Response.internalServerError(res, error)
    }
  }

  static async delete (req, res, next) {
    try {
      const { accountId } = req.params
      console.log(accountId)
      const result = await AccountsModel.deleteOne({_id: accountId})
      return Response.success(res, result)
    } catch (error) {
      return Response.notFound(res, 'Account not Found')
    }
  }
}

export default AccountsController
