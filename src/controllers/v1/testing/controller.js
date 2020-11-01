import Response from '../../../services/response/Response'
import Usuario from '../../../models/index'
class TestController {
  static async test (req, res, next) {
    try {
      const usuarios = await Usuario.find({})
      return Response.success(res, usuarios)
    } catch (error) {
      console.log(error)
      return res.json({error})
    }
  }
}

export { TestController }
