const express = require('express');
const router = express.Router();
const cryptoCtrl = require('../controllers/crypto');
const checkToken = require('../middleware/verify-token')

router.get('/list', checkToken, cryptoCtrl.getListCoins)
router.get('/eth', cryptoCtrl.ethExplorer)
router.get('/local', cryptoCtrl.getLocalCryptoStorage)
router.get('/coin/:coin', checkToken,cryptoCtrl.getIndicators)


module.exports = router;