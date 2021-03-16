  
import express from 'express'

import { createToken, checkToken } from './utils/token.js'
import { getConnection } from './connect.js'

import { createUser } from './models/user-queries.js'

import dotenv from 'dotenv'

const app = express()
const http = require('http')

const cryptoRouter = require('./routes/crypto')
const authRouter = require('./routes/auth')
require('dotenv').config()
// Utilisation du JSON
app.use(express.json())
const server = http.createServer(app)

const port = process.env.PORT || 3600
server.on('listening', () => {console.log('listening on port ' + port)})
server.on('error', () => console.log('error on initialisation'))

// Appel du routeur crypto
app.use('/api/v1/crypto',cryptoRouter)
app.use('/api/v1/auth', authRouter)




getConnectionToMongoDB().then(({db}) => {
    createUser({firstname: 'admin', lastname: 'admin', email: 'admin@admin.com', password: 'admin', login: 'admin'})
    server.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
}).catch(error => {
    console.error(error)
})

