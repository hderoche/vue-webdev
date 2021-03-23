import User from './user-models.js'


// CRUD
// Create
// Retrieve
// Update
// Delete

/**
 * Crée un utilisateur dans la base de données
 * 
 * @function
 * @async
 * 
 * @param {import('./user-model').UserData} userData 
 * @returns {Promise.<import('./user-model').UserMongooseDocument>}
 */
 export function createUser (userData) {
    const user = new User(userData)
    return user.save().then((usr) => {
        return usr})
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

export async function updateUser(userData) {
    const user = await User.findById(userData.id)

    for (const prop in userData) {
        user[prop] = userData[prop]
    }

    await user.save()
    return user
}

export function deleteUser (user) {
    User.deleteOne({ id: user.id })
}