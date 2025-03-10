import {model, Schema} from "mongoose";
import { UserGender, UserStatus } from "../constants/model.constant";

const userSchema = new Schema({
    fullName: {
        type: String,
        require: true
    },
    avatar: String,
    email: {
        type: String,
        require: true,
        unique: true
    },
    phone: String,
    password: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        enum: [UserGender.FEMALE, UserGender.MALE],
        require: true 
    },
    status: {
        type: String,
        enum: [UserStatus.ACTIVE, UserStatus.INACTIVE],
        default: UserStatus.ACTIVE
    },
    deletedAt: Date,
    verified: {
        type: Boolean,
        default: false 
    },
    birthDate: Date
},{timestamps: true})


export default model('User',userSchema);