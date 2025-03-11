import {model, Schema} from "mongoose";
import { AccountStatus } from "../constants/model.constant";

const accountSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: AccountStatus,
        default: AccountStatus.ACTIVE
    },
    deletedAt: {
        type: Date,
        default: null
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: 'Role'
    }
},{timestamps: true})


export default model('Account',accountSchema)