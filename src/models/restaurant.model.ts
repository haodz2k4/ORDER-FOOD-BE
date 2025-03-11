import { model, Schema } from "mongoose";
import { RestaurantStatus } from "../constants/model.constant";
import { softRemovePlugin } from "./plugins/soft-remove.plugin";


const restaurantSchema = new Schema(
    {
        name: {
            type: String,
            required: true 
        },
        description: {
            type: String,
            required: true 
        },
        business_license: {
            type: String,
            required: true 
        },
        status: {
            type: String,
            enum: RestaurantStatus,
            default: RestaurantStatus.PENDING
        },
        phone: {
            type: String,
            required: true,
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

restaurantSchema.plugin(softRemovePlugin)

export default model('Restaurant', restaurantSchema)