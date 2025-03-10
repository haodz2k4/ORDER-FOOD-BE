import { model, Schema } from "mongoose";
import { CrudEnum } from "../constants/app.constant";


const roleSchema = new Schema(
    {
        title: {
            type: String,
            require: true 
        },
        description: String,
        permissions: {
            type: [{
                name: {type: String, enum: [CrudEnum], require: true },
                resource: {type: String, require: true}
            }],
            default: []
        }
    },
    {
        timestamps: true
    }
)

export default model('Role', roleSchema);