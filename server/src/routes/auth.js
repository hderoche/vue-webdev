import express from 'express'
import * as authController  from '../controllers/auth.js'
import * as userController from '../controllers/user-controller.js'
const router = new express.Router();

router.post('/token', authController.login)
router.post('/user', userController.createUserController)
router.get('/me', authController.checkTokenController)

export default router
