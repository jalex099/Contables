import { env, port, ip, apiRoot, mongo } from '../config'
import express from '../services/express'
import controller from '../controllers'
import http from 'http'
import mongoose from '../services/mongoose'
import mquery from 'express-mquery'

const app = express(apiRoot, controller)
const server = http.createServer(app)

app.disable('etag')
app.use(mquery())

mongoose.connect(mongo.uri)

setImmediate(() => {
  server.listen(port, ip, () => {
    console.log(`| PROJECT | listening on http://${ip}:${port}, in ${env} mode`)
  })
})


export default app
