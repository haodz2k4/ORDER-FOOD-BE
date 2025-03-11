import {model, Schema} from "mongoose";
import { AccountStatus } from "../constants/model.constant";
import { softRemovePlugin } from "./plugins/soft-remove.plugin";

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
accountSchema.plugin(softRemovePlugin);

export default model('Account',accountSchema)