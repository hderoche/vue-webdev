import jwt from 'jsonwebtoken'

// necessaire pour importer la secret key
import dotenv from 'dotenv'
dotenv.config()


const secretKey = process.env.TOKEN_SECRET 
const options = {
    expiresIn: '24h',
}

/**
 * Creer un token JWT
 *
 * @function
 * @async
 *
 * @param {string} payload - Payload pour le token
 * @returns {String}
 */
export function createToken (payload) {
    const secret = secretKey
    const token = jwt.sign(payload, secret, options)
    return token
}

export function checkToken (token) {
    const secret = process.env.SECRET || secretKey
    return jwt.verify(token, secret)
}