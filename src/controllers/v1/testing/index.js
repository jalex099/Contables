import { Router } from 'express'
import { TestController } from './controller'
const router = new Router()

router.get('/', TestController.test)

export default router
