import mongoose, { Schema } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'
const modelName = 'TestCollection'

const schema = new Schema({
  test_field: {
    type: String
  }
}, {
  versionKey: false
})

schema.methods = {}

schema.plugin(mongoosePaginate)
const model = mongoose.model(modelName, schema)

export default model
