import express from 'express'
import * as  cryptoCtrl from '../controllers/crypto.js'
import {verifyToken} from '../middleware/verify-token.js'

const router = express.Router();

router.get('/list', cryptoCtrl.getListCoins)
router.get('/eth', cryptoCtrl.ethExplorer)
router.get('/coin/:coin', cryptoCtrl.getIndicators)

export default router