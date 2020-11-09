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
  simpleView () {
    return {
      id: this._id,
      parent_id: this.parent_id,
      name: this.name,
      type: this.type,
      current_amount: this.current_amount
    }
  }
}

schema.plugin(mongoosePaginate)
const model = mongoose.model(modelName, schema)

export default model
