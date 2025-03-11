import { model, Schema } from "mongoose";


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

export default model('Category',categorySchema)