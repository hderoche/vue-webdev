import { createUser } from '../models/user-queries.js'

export const createUserController = (req, res) => {
    //Récupération des données de la requête
    const userData = req.body
    console.log(userData)
    console.log(typeof(userData))
    //Utilisation de createUser des queries
    console.log('goes here')
    createUser (userData)
     .then((user) => {
         res.status(201).json({
             success: true,
             user
         })
     })
     .catch(err => {
         res.status(400).json({
             success: false,
             message: err.message
         })
     })
}

export const updateUserController = (req, res) => {
  //Récupération des données de la requête
//   const userData = ...
  //Utilisation de createUser des queries
}