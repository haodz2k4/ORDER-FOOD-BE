import {model, Schema} from "mongoose";
import { UserGender, UserStatus } from "../constants/model.constant";

const userSchema = new Schema({
    fullName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    phone:{
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true
    },
    gender: {
        type: UserGender,
        require: true 
    },
    status: {
        type: UserStatus,
        default: UserStatus.ACTIVE
    },
    deletedAt: Date,
    birthDate: Date
},{timestamps: true})


export default model('User',userSchema);