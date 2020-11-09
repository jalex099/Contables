import moment from 'moment'
import mongoose, { Schema } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'
const modelName = 'accountingSeat'

const schema = new Schema({
  date: {type: Date, required: true, default: moment().format()},
  description: {type: String, required: true}
}, {
  versionKey: false
})

schema.methods = {
  simpleView () {
    return {
      id: this._id,
      date: this.date,
      description: this.description
    }
  }
}

schema.plugin(mongoosePaginate)
const model = mongoose.model(modelName, schema)

export default model
