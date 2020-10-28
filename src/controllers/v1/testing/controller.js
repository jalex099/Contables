import Response from '../../../services/response/Response'

class TestController {
  static test (req, res, next) {
    try {
      return Response.success(res, {message: 'ok'})
    } catch (error) {
      console.log(error)
      return res.json({error})
    }
  }
}

export { TestController }
