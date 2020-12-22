const auth = require('../controllers/auth.js')

function verifyToken (req, res, next) {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        auth.checkToken(token)
        next()
    } catch (error) {
        res.status(401)
        .json({
            success: false,
            message: 'Invalid token'
        })        
    }
}

module.exports = verifyToken