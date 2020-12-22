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


// Sign in function, if credentials matches then generate a token
exports.getToken = (req, res) => {
    // If the request from the client is not complete
    // Return a message
    const body = req.body;
    if (!body ) {
        res.json({success: false, message:"all fields are required"})
        return
    }

    // Reading the database and extracting each user to match with the request
    db.getDb(databaseFile).then(data => {
        console.log(data, Object.keys(data))
        console.log(typeof(data))
        credential = null
        Object.keys(data).forEach(key => {
            let element = data[key];
            console.log(key, element, element.user, req.body.user)
            if (element.user === req.body.user) {
                console.log('same user')
                userPwd = crypto.createHash('sha256').update(req.body.password).digest('hex');
                if (element.password === userPwd) {
                    credential = {
                        username: req.body.username,
                        password: userPwd
                    }
                    token = createToken(credential);
                    res.status(200).json({
                        success: true,
                        token
                    })
                } else {
                    res.status(401).json({
                        success: false,
                        message: 'invalid password'
                    })
                }
            }
        });
        if (credential === null) {
            res.status(401).json({
                success: false,
                message: 'not registered in the database'
            })
        }
    }).catch(err => {
        console.error(err)
    })

}

// Build the format required for writing in the database
// Write the data in the DB
// If correctly written, then generates a token for the user
exports.saveUser = (req, res) => {
    db.getDb(databaseFile).then(data => {
        isUser = false;
        let users = []
        Object.keys(data).forEach(key => {
            let element = data[key];
            console.log('element', element)
            users.push(element)
            if (element.user === req.body.user) {
                isUser = true;
            }
        });
        if (isUser) {
            res.status(401).json({
                success: false,
                message: 'user already registered'
            });
        }
        else {
            userData = {
                user: req.body.user,
                password: crypto.createHash('sha256').update(req.body.password).digest('hex')
            }
            console.log('before push',users)
            users.push(userData)
            console.log('after push',users)

            db.saveDb(users, databaseFile).then(result => {
                res.status(201).json({
                    success: true,
                    message: 'user successfully registered'
                })
            }).catch(err => {
                res.status(500).json({
                    success: false,
                    message: 'error in writing in the database',
                    error: err
                })
            })
        }
    }).catch(err => {
        res.status(500).json({
            success: false,
            message: 'error in reading the database',
            error: err
        })
    })
}


const options = {
    expiresIn: '24h',
}
secretKey = 'b374211dddaa3e48391e614efc4747f3cdacc8d6e8c53d930d72649f3179e462'

function createToken(payload) {
    const secret = process.env.SECRET || secretKey
    const token = jwt.sign(payload, secret, options)
    return token
}

exports.checkToken = (token) => {
    const secret = process.env.SECRET || secretKey
    jwt.verify(token, secret)
}
exports.checkToken3 = (req, res) => {
    console.log('checking the token')
    try {token = req.header('Authorization').replace('Bearer ', '')
    const secret = process.env.SECRET || secretKey
    jwt.verify(token, secret)
    let content = jwt.decode(token)
    res.status(200).json({
        success: true, 
        message: 'token valid',
        content
    })
    } catch {
        res.status(401).json({
            success: false,
            message: 'invalid token'
        })
    }
}
