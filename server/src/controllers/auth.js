import {createToken, checkToken} from '../utils/token.js'
import * as userQueries from '../models/user-queries.js'
import {compareHash} from '../utils/crypto.js'


// Fonction login cote server
export const login = (req, res) => {
  const body = req.body || {}
  const {login, password} = body
  
  if (!login || !password) {
    res.sendStatus(401).json({
      success: false, 
      message: 'User and password are required'
    })
    return
  }
  
  userQueries.getUserByLogin(login).then((doc) => {

    const user = doc
    
    const isValidCredentials = compareHash(password, doc.password)
    // const isValidCredentials = user === first.user && password === first.password
    if (!isValidCredentials) {
      res.sendStatus(401).json({
        success: false,
        message: 'Credentials are not valid'
      })
    }
    
    return doc
    
  }).then((doc) => {
    const payload = {
      login, password
    }
    const token = createToken(payload)
    
    res.status(201).json({
      success: true,
      user: {
        ...doc,
        password: undefined,
      },
      token
    })
  }).catch(err => {
    console.error(err)
  })

}


export const checkTokenController = (req, res) => {
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
