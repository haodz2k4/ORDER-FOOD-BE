import {model, Schema} from "mongoose";
import { AccountStatus } from "../constants/model.constant";

const accountSchema = new Schema({
    fullName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    status: {
        type: AccountStatus,
        default: AccountStatus.ACTIVE
    },
    deletedAt: Date,
    roleId: {
        type: Schema.Types.ObjectId,
        ref: 'Role'
    }
},{timestamps: true})


export default model('Account',accountSchema)