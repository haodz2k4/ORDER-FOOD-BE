import Joi from "joi";

export interface ValidateRequest {
    query?: Joi.ObjectSchema<any>;
    body?: Joi.ObjectSchema<any>;
    param?: Joi.ObjectSchema<any>;
}