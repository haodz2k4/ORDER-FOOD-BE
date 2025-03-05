import Joi, { CustomHelpers } from "joi";
import { isValidObjectId } from "mongoose";


export const validObjectId = (value: any, helper: CustomHelpers) => {
    if(!isValidObjectId(value)){
        return helper.error('any.invalid', {message: 'Invalid id'})
    }
    return value
}
