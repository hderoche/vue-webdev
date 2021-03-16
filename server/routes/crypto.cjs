const express = require('express');
const router = express.Router();
const cryptoCtrl = require('../controllers/crypto.js');
const checkToken = require('../middleware/verify-token.js')

router.get('/list', checkToken, cryptoCtrl.getListCoins)
router.get('/eth', cryptoCtrl.ethExplorer)
router.get('/local', cryptoCtrl.getLocalCryptoStorage)
router.get('/coin/:coin', checkToken,cryptoCtrl.getIndicators)


module.exports = cryptoRouter;