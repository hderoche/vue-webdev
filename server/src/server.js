import express from 'express'

import { getConnection } from './connect-db.js'

import dotenv from 'dotenv'
dotenv.config()

// Importation des routers
import cryptoRouter  from './routes/crypto.js'
import authRouter from './routes/auth.js'


const app = express()

// Configuration du serveur
app.use(express.json())
const port = process.env.PORT || 4000
app.on('listening', () => {console.log('listening on port ' + port)})
app.on('error', () => console.log('error on initialisation'))


// Appel du routeur crypto
app.use('/api/v1/crypto', cryptoRouter)
app.use('/api/v1/auth', authRouter)



// Connection à la base de données MongoDB
getConnection().then(() => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
}).catch(error => {
    console.error(error)
})

