import { model, Schema } from "mongoose";
import { CrudEnum } from "../constants/app.constant";
import { softRemovePlugin } from "./plugins/soft-remove.plugin";


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

roleSchema.plugin(softRemovePlugin)

export default model('Role', roleSchema);