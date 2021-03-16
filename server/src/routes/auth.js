import express from 'express'
import * as authController  from '../controllers/auth.js'
const router = new express.Router();

router.post('/token', authController.login)
router.post('/user', authController.register)
router.get('/user', authController.checkTokenController)

export default router
