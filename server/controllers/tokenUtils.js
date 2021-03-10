

function createToken (payload) {
  
  const secret = process.env.SECRET || secretKey
  const token = jwt.sign(payload, secret, options)
  return token
}

const options = {
  expiresIn: '24h',
  secretKey : 'b374211dddaa3e48391e614efc4747f3cdacc8d6e8c53d930d72649f3179e462'
}

function checkToken (token) {
  const secret = process.env.SECRET || options.secretKey
  jwt.verify(token, secret)
  const content = jwt.decode(token)
  return content
}
