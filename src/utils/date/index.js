import moment from 'moment'

class DateOperations {
  static evaluateDaysPassedFromNow (dateToEvaluate, maxDays) {
    try {
      console.log('date to evaluate: ', dateToEvaluate)
      const timePassed = moment(dateToEvaluate).fromNow()

      let [quantity, unitType] = timePassed.split(' ')
      if (quantity === 'a') quantity = 1
      let quantityDaysPassed = Number(quantity)

      if (unitType === 'months' || unitType === 'month') {
        quantityDaysPassed = quantity * 30
      } else if (unitType === 'years' || unitType === 'year') {
        quantityDaysPassed = quantity * 360
      }
      return maxDays <= quantityDaysPassed
    } catch (error) {
      console.log(error)
      return false
    }
  }
}

export { DateOperations }
