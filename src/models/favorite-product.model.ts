import { model, Schema } from "mongoose";


const favoriteProductSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: {
        type: [
            {
                product: {
                    type: Schema.Types.ObjectId,
                    ref: 'Product',
                    required: true 
                },
                addedAt: {
                    type: Date,
                    default: Date.now()
                }
            }
        ],
        default: [] 
    }
})

export default model('Favorite-product',favoriteProductSchema)