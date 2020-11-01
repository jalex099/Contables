import { Router } from 'express'
import test from './testing'
import Accounts from './accounts'
import { ping } from '../../services/response'

const router = new Router()

router.use('/accounts', Accounts.getRouter())
router.use('/test', test)

router.get('/ping', (req, res) => ping(res))

export default router
