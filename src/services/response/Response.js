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
    let response = {code: 1, status: 404, name: 'Not Found'}
    if (message.code && message.error) {
      response.code = message.code
      response.error = message.error
    } else {
      response.error = message
    }
    res.status(404).json(response)
  }

  static badRequest (res, message = 'bad request') {
    let response = {code: 2, status: 400, name: 'Bad Request'}
    if (message.code && message.error) {
      response.code = message.code
      response.error = message.error
    } else {
      response.error = message
    }
    res.status(400).json(response)
  }

  static unauthorized (res, message = 'Your request was made with invalid credentials') {
    let response = {code: 3, status: 401, name: 'Unauthorized'}
    if (message.code && message.error) {
      response.code = message.code
      response.error = message.error
    } else {
      response.error = message
    }
    res.status(401).json(response)
  }

  static internalServerError (res, message = 'was an internal server error occurred') {
    let response = {code: 4, status: 500, name: 'Internal Server Error'}
    if (message.code && message.error) {
      response.code = message.code
      response.error = message.error
    } else {
      response.error = message
    }
    res.status(500).json(response)
  }

  static dataValidationFailed (res, message = 'Data validation filed') {
    let response = {code: 4, status: 500, name: 'Data validation failed'}
    if (message.code && message.error) {
      response.code = message.code
      response.error = message.error
    } else {
      response.error = message
    }
    res.status(422).json(response)
  }
}

export default Response
