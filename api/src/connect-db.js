import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const defaultMongoUrl = 'mongodb://venom:venom@localhost:27017/venom'

const mongoOptions = {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}

export function getConnection() {
    const mongoUrl = process.env.MONGO_ATLAS || process.env.MONGO_URL || defaultMongoUrl
    return mongoose.connect(mongoUrl, mongoOptions)
}