import { Router } from 'express'
import Response from '../../../services/response/Response'
import { AccountingSeatsModel } from '../../../models'
import { paginateOptions } from '../../../utils/mongoose/paginate'
import { isAllPropertiesInObject } from '../../../utils/operations'
import AccountingSeat from './AccountingSeat'

class AccountingSeatController {
  static getRouter () {
    const router = new Router()

    router.get('/', AccountingSeatController.list)
    router.post('/', AccountingSeatController.create)
    router.delete('/:accountingSeatId', AccountingSeatController.delete)

    return router
  }

  static async list (req, res, next) {
    try {
      req.query.limit = 1000000
      const { filter, options } = paginateOptions(req.query)
      let transactions = await AccountingSeatsModel.paginate(filter, options)
      return Response.success(res, transactions)
    } catch (error) {
      return Response.badRequest(res, {message: 'bad request'})
    }
  }

  static async create (req, res, next) {
    try {
      const { body } = req
      const requireFields = ['description']
      if (!Object.keys(body).length) return Response.badRequest(res, 'Not found data')
      if (!isAllPropertiesInObject(body, requireFields)) return Response.badRequest(res, `These fields are required to these operation: ${requireFields.join(',')}`)

      const result = await AccountingSeat.create(body)
      return Response.successCreate(res, result)
    } catch (error) {
      console.log(error)
      return Response.badRequest(res, error)
    }
  }

  static async delete (req, res, next) {
    try {
      const { accountingSeatId } = req.params
      const result = await AccountingSeatsModel.deleteOne({_id: accountingSeatId})
      return Response.success(res, result)
    } catch (error) {
      return Response.notFound(res, 'Accounting seat not Found')
    }
  }
}

export default AccountingSeatController
