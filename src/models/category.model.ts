import { model, Schema } from "mongoose";
import { softRemovePlugin } from "./plugins/soft-remove.plugin";


const categorySchema = new Schema(
    {
        title: {
            type: String,
            required: true 
        },
        description: String,
        thumbnail: String,
        deletedAt: {
            type: Date,
            default: null
        }
    }, 
    {
        timestamps: true
    }
)

categorySchema.plugin(softRemovePlugin)

export default model('Category',categorySchema)