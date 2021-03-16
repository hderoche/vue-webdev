
export default authRouter {
const express = require('express');
const router = new express.Router();
const authController = require('../controllers/auth')

router.post('/token', authController.login)
router.post('/user', authController.saveUser)
router.get('/user', authController.checkToken)

}
