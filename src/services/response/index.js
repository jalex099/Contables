function ping (res) {
  let response = {code: 1, status: 200, name: 'Ok', message: 'Server Online'}
  res.status(200).json(response)
}

function successList (res, data) {
  let response = {
    items: data.docs,
    total_count: data.total,
    page_count: data.pages,
    current_page: data.page
  }
  res.status(200).json(response)
}

function success (res, data) {
  res.status(200).json(data)
}

function successCreated (res, data) {
  res.status(201).json(data)
}

function notFound (res, message) {
  let response = {code: 1, status: 404, name: 'Not Found'}
  if (message.code && message.error) {
    response.code = message.code
    response.error = message.error
  } else {
    response.error = message
  }
  res.status(404).json(response)
}

function badRequest (res, message = 'bad request') {
  let response = {code: 2, status: 400, name: 'Bad Request'}
  if (message.code && message.error) {
    response.code = message.code
    response.error = message.error
  } else {
    response.error = message
  }
  res.status(400).json(response)
}

function unauthorized (res, message = 'Your request was made with invalid credentials') {
  const response = {code: 0, status: 401, name: 'Unauthorized', message}
  
  res.status(401).json(response)
}

function internalServerError (res, message = 'was an internal server error occurred') {
  const response = {code: 0, status: 500, name: 'Internal Server Error', message}
  res.status(500).json(response)
}

function dataValidationFailed (res, response) {
  res.status(422).json(response)
}

export { ping, successList, success, successCreated, notFound, badRequest, unauthorized, internalServerError, dataValidationFailed }
