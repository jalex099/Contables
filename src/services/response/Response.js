class Response {
  static ping (res) {
    let response = {code: 1, status: 200, name: 'Ok', message: 'Server Online'}
    res.status(200).json(response)
  }

  static successList (res, data) {
    let response = {
      total_items: data.totalDocs,
      current_page: data.page,
      limit: data.limit,
      items: data.docs
    }
    res.status(200).json(response)
  }

  static success (res, data) {
    res.status(200).json(data)
  }

  static successCreate (res, data) {
    res.status(201).json(data)
  }

  static notFound (res, message) {
    const response = {code: 0, status: 404, name: 'Not Found', message}
    res.status(404).json(response)
  }

  static badRequest (res, message = 'bad request') {
    const response = {code: 0, status: 400, name: 'Bad Request', message}
    res.status(400).json(response)
  }

  static unauthorized (res, message = 'Your request was made with invalid credentials') {
    const response = {code: 0, status: 401, name: 'Unauthorized', message}
    res.status(401).json(response)
  }

  static internalServerError (res, message = 'was an internal server error occurred') {
    const response = {code: 0, status: 500, name: 'Internal Server Error', message}
    res.status(500).json(response)
  }

  static dataValidationFailed (res, response) {
    res.status(422).json(response)
  }
}

export default Response
