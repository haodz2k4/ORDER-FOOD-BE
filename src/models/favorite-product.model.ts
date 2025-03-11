import { model, Schema } from "mongoose";


const favoriteProductSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    items: {
        type: [
            {
                product: {
                    type: Schema.Types.ObjectId,
                    ref: 'Product',
                    require: true 
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