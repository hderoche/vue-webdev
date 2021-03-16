import mongoose from 'mongoose'
const defaultMongoUrl = 'mongodb://venom:venom@localhost:27017/venom'

const mongoOptions = {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}

export function getConnection() {
    const mongoUrl = process.env.MONGO_URL || process.env.MONGO_ATLAS || defaultMongoUrl
    return mongoose.connect(mongoUrl, mongoOptions)
}