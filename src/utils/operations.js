
function round (number, decimals = 2) {
  const factor = Math.pow(10, decimals)
  return Math.round(number * factor) / factor
}

function isAllPropertiesInObject (object, properties) {
  let validationResult = true
  for (const field of properties) {
    if (!object.hasOwnProperty(field)) validationResult = false
  }
  return validationResult
}

export { round, isAllPropertiesInObject }
