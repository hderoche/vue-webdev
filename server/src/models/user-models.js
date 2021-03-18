import mongoose from 'mongoose'
import {hash} from '../utils/crypto.js'
const {Schema} = mongoose

const UserSchema  = new Schema(
    {
        firstname: {
            type: String,
            required: [true, 'Le prénom est manquant'],
            trim: true
        },
        lastname: {
            type: String,
            required: [true, 'Le nom est manquant'],
            trim: true
        },
        email: {
            type: String,
            required: [true, 'L\'email est manquante'],
            trim: true,
            lowercase: true, 
            unique: true
        },
        login : {
            type: String,
            required: [true, 'Le login est requis'],
            trim: true
        },
        password: {
            type: String,
            required: [true, 'Le login est requis']
        }
    }
)

// Ne marche pas en l'etat

// UserSchema.set('save', {
//     transform (doc, ret) {
//         console.log('ret :',ret)
//         delete ret.password
//         return ret
//     }
// })

UserSchema.post('save', function() {
    const user = this
    user.password = undefined
})

UserSchema.pre('save', async function (next) {
    const user = this
  
    if (!user.isModified('password')) {
      return next()
    }
    this.password = await hash(user.password)
    next()
})
  
export default mongoose.model('User', UserSchema)
  
/**
 * @typedef UserMongooseDocument
 * @type {UserData & import('mongoose').Document}
 */

/**
 * @typedef UserData
 * @type {Object}
 * 
 * @property {string} firstname - Prénom
 * @property {string} lastname - Nom
 * @property {string} email - Adresse email
 * @property {string} login - login
 * @property {string} password - mot de passe
 * 
 */