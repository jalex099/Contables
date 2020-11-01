import mongoose, { Schema } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'
const modelName = 'accounts'

const schema = new Schema({
  parent_id: {type: String, required: true},
  name: {type: String, required: true},
  type: {type: String, required: true},
  current_amount: {type: Number, required: true}
}, {
  versionKey: false
})

schema.methods = {
}

schema.plugin(mongoosePaginate)
const model = mongoose.model(modelName, schema)

export default model
