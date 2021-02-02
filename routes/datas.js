import express from 'express'
import { add, search } from '../controllers/datas.js'

const router = express.Router()

router.post('/', add)
router.get('/search', search)

export default router
