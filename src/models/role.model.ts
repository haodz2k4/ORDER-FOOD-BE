import { model, Schema } from "mongoose";
import { CrudEnum } from "../constants/app.constant";


const roleSchema = new Schema(
    {
        title: {
            type: String,
            required: true 
        },
        description: String,
        permissions: {
            type: [{
                name: {type: String, enum: [CrudEnum], required: true },
                resource: {type: String, required: true}
            }],
            default: []
        },
        deletedAt: {
            type: Date,
            default: null
        },
    },
    {
        timestamps: true
    }
)

export default model('Role', roleSchema);