import express from 'express'
import * as  cryptoCtrl from '../controllers/crypto.js'
import {verifyToken} from '../middleware/verify-token.js'

const router = express.Router();

router.get('/list', verifyToken, cryptoCtrl.getListCoins)
router.get('/eth', cryptoCtrl.ethExplorer)
router.get('/local', cryptoCtrl.getLocalCryptoStorage)
router.get('/coin/:coin', verifyToken, cryptoCtrl.getIndicators)

export default router