import { model, Schema } from "mongoose";
import { DayOfWeek } from "../constants/app.constant";



const businessHourSchema = new Schema({
    restaurant: {
        type: Schema.Types.ObjectId, 
        ref: 'Restaurant',
        unique: true 
    },
    businessHours: {
        type: [
            {
                day: {
                    type: String,
                    enum: DayOfWeek
                },
                openTime: {
                    type: Date,
                    require: true 
                },
                closeTime: {
                    type: Date,
                    require: true 
                },
                closed: {
                    type: Boolean,
                    default: false
                }
            }
        ],
        default: []
    },
},{timestamps: true})

export default model('Businness-hour',businessHourSchema);