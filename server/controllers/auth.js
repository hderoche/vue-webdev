require('dotenv').config();
import {createToken, checkToken} from '../utils/token.js'


const first = {
  id: 1,
  user: 'admin',
  password: 'admin'
}

// Fonction login cote server
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
    const success = checkToken(token)
    res.json({success,
      })
  } catch {
    res.status(401).json({success, 
    message: 'Invalid Token'})
  }
}

// Fonction à faire pour s'inscrire
exports.register = (req, res) => {
  const body = req.body || {}
  const { user, password } = body
  
}