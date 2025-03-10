import { model, Schema } from "mongoose";


const restaurantSchema = new Schema(
    {
        ownerId: Schema.Types.ObjectId,
        name: {
            type: String,
            require: true 
        },
        description: {
            type: String,
            require: true 
        },
        phone: {
            type: String,
            require: true,
            minLength: 9,
            maxLength: 10
        },
        address: {
            type: String,
            required: true
        },
        deletedAt: {
            type: Date,
            default: null
        }
    },
    {
        timestamps: true
    }
)

export default model('Restaurant', restaurantSchema)