import mongoose from 'mongoose'
import {hash} from '../utils/crypto.js'
const {Schema} = mongoose

const userSchema = new Schema(
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

userSchema.set('toJSON', {
    transform (doc, ret) {
        delete ret.password
        return ret
    }
})
  
userSchema.pre('save', function preSave () {
    const user = this
  
    if (!user.isModified('password')) {
      return
    }
    user.password = hash(user.password)
})

export default mongoose.model('User', userSchema)