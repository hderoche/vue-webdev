const express = require('express');
const router = new express.Router();
const authController = require('../controllers/auth')

router.post('/user', authController.login)
// router.post('/register', authController.saveUser)
router.get('/me', authController.checkToken)


module.exports = router;