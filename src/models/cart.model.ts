import { model, Schema } from "mongoose";



const cartSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    items: {
        type: [
            {
                product: {
                    type: Schema.Types.ObjectId,
                    ref: 'Product',
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                    min: 0
                }
            }
        ],
        default: []
    }
}, {timestamps: true})

export default model('Cart', cartSchema);