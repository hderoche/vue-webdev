import User from './user-models.js'

export function createUser (userData) {
    const user = new User(userData)
    return user.save().then(() => user)
}

export function modifyUser(userData) {
    User.findById(userData.id)
    .then(user => {
        // logic to modify the user
    })
}