require('dotenv').config();
const crypto = require('crypto');
const jwt = require('jsonwebtoken')
const db = require('../db-management');

const databaseFile = './database.json'

// Database format for User, Password :

// {
//     user: "user",
//     password: "password"
// }


const first = {
  id: 1,
  user: 'admin',
  password: 'admin'
}



function createToken (payload) {
  
  const secret = process.env.SECRET || secretKey
  const token = jwt.sign(payload, secret, options)
  return token
}

const secretKey = 'b374211dddaa3e48391e614efc4747f3cdacc8d6e8c53d930d72649f3179e462'
const options = {
  expiresIn: '24h',
}

function checkToken (token) {
  const secret = process.env.SECRET || secretKey
  jwt.verify(token, secret)
  const content = jwt.decode(token)
  return content
}

exports.login = (req, res) => {
  const body = req.body || {}
  const {user, password} = body

  if (!user || !password) {
    res.send(401).json({
      success: false, 
      message: 'User and password are required'
    })
    return
  }
  const isValidCredentials = user === first.user && password === first.password

  if (!isValidCredentials) {
    res.status(401).json({
      success: false,
      message: 'Credentials are not valid'
    })
  }
  const payload = {
    user, password
  }
  const token = createToken(payload)
  res.status(201).json({
    success: true,
    user: {
      ...first,
      password: undefined,
    },
    token
  })
}

exports.checkToken = (req, res) => {
  const token = req.headers.authorization.replace('Bearer ', '')
  try {
    const payload = checkToken(token)
    const user = payload.user
    console.log(payload)
    res.json({success: true,
    user: {
      ...first,
      password: undefined
      }
    })
  } catch {
    res.status(401).json({success: false, 
    message: 'Invalid Token'})
  }
}

exports.register = (req, res) => {
  const body = req.body || {}
  const { user, password } = body
  
}