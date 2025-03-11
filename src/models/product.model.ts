import { model, Schema } from "mongoose";
import { ProductStatus } from "../constants/model.constant";
import { softRemovePlugin } from "./plugins/soft-remove.plugin";


const productSchema = new Schema(
    {
        restaurant: {
            type: Schema.Types.ObjectId, 
            ref: 'Restaurant'
        },
        name: {
            type: String,
            required: true 
        },
        description: String,
        price: {
            type: Number,
            required: true,
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

productSchema.plugin(softRemovePlugin)

export default model('Product', productSchema)