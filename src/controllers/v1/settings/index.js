import { Router } from 'express'
import Response from '../../../services/response/Response'
import { SettingModel } from '../../../models'
import { paginateOptions } from '../../../utils/mongoose/paginate'
import { isAllPropertiesInObject } from '../../../utils/operations'

class SettingController {
  static getRouter () {
    const router = new Router()

    router.get('/', SettingController.list)
    router.post('/', SettingController.create)
    router.delete('/:settingId', SettingController.delete)

    return router
  }

  static async list (req, res, next) {
    try {
      req.query.limit = 1000000
      const { filter, options } = paginateOptions(req.query)
      let settings = await SettingModel.paginate(filter, options)
      return Response.success(res, settings)
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
      const result = await SettingModel.create(payload)
      return Response.successCreate(res, result)
    } catch (error) {
      console.log(error)
      return Response.internalServerError(res, error)
    }
  }

  static async delete (req, res, next) {
    try {
      const { settingId } = req.params
      const result = await SettingModel.deleteOne({_id: settingId})
      return Response.success(res, result)
    } catch (error) {
      return Response.notFound(res, 'Setting not Found')
    }
  }
}

export default SettingController
