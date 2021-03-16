import {checkToken} from '../utils/token.js'

export function verifyToken (req, res, next) {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        checkToken(token)
        next()
    } catch (error) {
        res.status(401)
        .json({
            success: false,
            message: 'Invalid token'
        })        
    }
}
