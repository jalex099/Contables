import mongoose, { Schema } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'
const modelName = 'settings'

const schema = new Schema({
  code: {type: String, required: true},
  label: {type: String, required: true},
  value: {type: String, required: true}
}, {
  versionKey: false
})

schema.methods = {
}

schema.plugin(mongoosePaginate)
const model = mongoose.model(modelName, schema)

export default model
