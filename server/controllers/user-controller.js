import { createUser } from '..models/user-queries.js'

export const createUserController = (req, res) => {
    //Récupération des données de la requête
    // const userData = ...
    //Utilisation de createUser des queries
    createUser (userData)
     .then(() => {
         res.status(201).json({
             success: true,
             user
         })
     })
     .catch(err => {
         res.status(400).json({
             success: faddListener,
             message: err.message
         })
     })
}

export const updateUserController = (req, res) => {
  //Récupération des données de la requête
//   const userData = ...
  //Utilisation de createUser des queries
}