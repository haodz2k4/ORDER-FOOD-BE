import { model, Schema } from "mongoose";
import { RestaurantStatus } from "../constants/model.constant";


const restaurantSchema = new Schema(
    {
        name: {
            type: String,
            require: true 
        },
        description: {
            type: String,
            require: true 
        },
        business_license: {
            type: String,
            require: true 
        },
        status: {
            type: String,
            enum: RestaurantStatus,
            default: RestaurantStatus.PENDING
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