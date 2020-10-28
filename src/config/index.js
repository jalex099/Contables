import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

const config = {
  env: process.env.NODE_ENV || 'development',
  root: path.join(__dirname, '../..'),
  port: process.env.PORT || 3001,
  ip: process.env.IP || '0.0.0.0',
  apiRoot: process.env.APP_ROOT || '',
  mongo: {
    uri: process.env.APP_MONGO_URI || 'mongodb://localhost:27017/uride-connector?authSource=admin',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }
  }
}

module.exports = config
