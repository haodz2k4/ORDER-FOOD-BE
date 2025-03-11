import {model, Schema} from "mongoose";
import { UserGender, UserStatus } from "../constants/model.constant";
import { hashPassword } from "../utils/password";

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    avatar: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: String,
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: [UserGender.FEMALE, UserGender.MALE],
        required: true 
    },
    status: {
        type: String,
        enum: [UserStatus.ACTIVE, UserStatus.INACTIVE],
        default: UserStatus.ACTIVE
    },
    deletedAt: {
        type: Date,
        default: null
    },
    verified: {
        type: Boolean,
        default: false 
    },
    birthDate: Date
},{timestamps: true})

//HASH PASSWORD PREVIOUS CREATE
userSchema.pre('save',async function(next) {
    if(this.isModified('password')) {
        this.password = await hashPassword(this.password);
    }
    next()
})

export default model('User',userSchema);