import { CustomHelpers } from "joi";
import { isValidObjectId } from "mongoose";

export const validObjectId = (value: string, helper: CustomHelpers) => {
    if (!isValidObjectId(value)) {
        return helper.error("Invalid ID format");
    }
    return value;
};
