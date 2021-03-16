import userModels from './user-models.js'
import User from './user-models.js'


// CRUD
// Create
// Retrieve
// Update
// Delete

/**
 * Créer un utilisateur dans la base de données
 * 
 * @function
 * @async
 * 
 * @param {import('./user-models').UserData} userData
 * @returns {Promise.<import('./user-models').UserMongooseDocument>}
 * 
 */
export function createUser (userData) {
    const user = new User(userData)
    return user.save().then(() => user)
}

export function getUserById(id){
    return User.findById(id)
}

export function getUserByLogin(login){
    return User.findOne({ login })
}

export function getUsers(){
    return User.find()
}

export function modifyUser(userData) {
    User.findById(userData.id)
    .then(user => {
        // logic to modify the user
    })
}

export function deleteUser (user) {
    User.deleteOne({ id: user.id })
}