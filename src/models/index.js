import mongoose, { Schema } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'
const modelName = 'usuarios'

const schema = new Schema({
  nombre: {type: String},
  usuario: {type: String}
}, {
  versionKey: false
})

schema.methods = {}

schema.plugin(mongoosePaginate)
const model = mongoose.model(modelName, schema)

export default model
