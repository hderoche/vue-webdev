const express = require('express');
const router = new express.Router();
const authController = require('../controllers/auth')

router.post('/signin', authController.getToken)
router.post('/register', authController.saveUser)
router.post('/token', authController.checkToken3)


module.exports = router;