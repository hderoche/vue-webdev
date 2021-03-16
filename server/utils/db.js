const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://venom:venom@localhost:27017/venom'
const dbName = 'venom'
module.exports = {
    getConnectionToMongoDB() {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, function(err, client) {
                if (err) {
                    reject(err)
                    return
                }
                console.log('Connected to the server')
                const db = client.db(dbName)
                resolve({db, client})
            })
        })
    }
}