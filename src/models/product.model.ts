import { model, Schema } from "mongoose";
import { ProductStatus } from "../constants/model.constant";


const productSchema = new Schema(
    {
        restaurant: {
            type: Schema.Types.ObjectId, 
            ref: 'Restaurant'
        },
        name: {
            type: String,
            require: true 
        },
        description: String,
        price: {
            type: Number,
            require: true,
            min: 0
        },
        discountPercentage: {
            type: Number,
            default: 0,
            min: 0,
            max: 100
        }, 
        status: {
            type: String,
            enum: ProductStatus
        },
        thumbnail: String,
        images: {
            type: [String],
            default: []
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

export default model('Product', productSchema)