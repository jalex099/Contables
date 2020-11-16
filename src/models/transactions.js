import mongoose, { Schema } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'
const modelName = 'transactions'

const schema = new Schema({
  account_id: {type: String, required: true},
  accounting_seat_id: {type: String, required: true},
  amount: {type: Number, required: true},
  type: {type: String, required: true}
}, {
  versionKey: false
})

schema.methods = {
  simpleView () {
    return {
      id: this._id,
      account_id: this.account_id,
      accounting_seat_id: this.accounting_seat_id,
      amount: this.amount,
      type: this.type
    }
  }
}

schema.plugin(mongoosePaginate)
const model = mongoose.model(modelName, schema)

export default model
