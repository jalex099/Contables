import { Router } from 'express'
import Response from '../../../services/response/Response'
import { TransactionModel } from '../../../models'
import { paginateOptions } from '../../../utils/mongoose/paginate'
import { isAllPropertiesInObject } from '../../../utils/operations'

class TransactionsController {
  static getRouter () {
    const router = new Router()

    router.get('/', TransactionsController.list)
    router.post('/', TransactionsController.create)
    router.delete('/:settingId', TransactionsController.delete)

    return router
  }

  static async list (req, res, next) {
    try {
      req.query.limit = 1000000
      const { filter, options } = paginateOptions(req.query)
      let transactions = await TransactionModel.paginate(filter, options)
      return Response.success(res, transactions)
    } catch (error) {
      return Response.badRequest(res, {message: 'bad request'})
    }
  }

  static async create (req, res, next) {
    try {
      const { body } = req
      const requireFields = ['label', 'value']
      let payload = {}
      if (!Object.keys(body).length) return Response.badRequest(res, 'Not found data')
      if (!isAllPropertiesInObject(body, requireFields)) return Response.badRequest(res, `These fields are required to these operation: ${requireFields.join(',')}`)
      payload.label = body.label
      payload.value = body.value
      payload.code = body.code
      const result = await TransactionModel.create(payload)
      return Response.successCreate(res, result)
    } catch (error) {
      console.log(error)
      return Response.internalServerError(res, error)
    }
  }

  static async delete (req, res, next) {
    try {
      const { settingId } = req.params
      const result = await TransactionModel.deleteOne({_id: settingId})
      return Response.success(res, result)
    } catch (error) {
      return Response.notFound(res, 'Setting not Found')
    }
  }
}

export default TransactionsController
