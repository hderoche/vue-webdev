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
  const userData = req.body.user
  //Utilisation de createUser des queries
  upadateUser(userData)
    .then(() => {
      res.status(200).json({
          success: true,
          user
      })
    })
    .catch(err => {
      res.status(501).json({
          success: false, 
          message: err
      })
    })
}

export const getAllUsers = async (req, res) => {
    const users = await getUsers()
    res.json({
        succes: true,
        users,
    })
}