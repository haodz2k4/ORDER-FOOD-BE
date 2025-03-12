import Joi from "joi";
import { UserGender, UserStatus } from "../constants/model.constant";
import { queryValidate } from "./common/query-validate.common";
import { ValidateRequest } from "../common/interfaces/validate-req.interface";
import { validObjectId } from "./common/custom.common";


export const getUsers: ValidateRequest = {
    query: Joi.object().keys({
        ...queryValidate,
        gender: Joi.string().valid(...Object.values(UserGender)),
        status: Joi.string().valid(...Object.values(UserStatus))
    })
}

export const createUser: ValidateRequest = {
    body: Joi.object().keys({
        fullName: Joi.string().min(3).max(50).required(),
        email: Joi.string().email().required(),
        phone: Joi.string().pattern(/^[0-9]{10,11}$/), 
        password: Joi.string().min(6).max(50).required(),
        gender: Joi.string().valid(...Object.values(UserGender)).required(),
        status: Joi.string(),
        verified: Joi.boolean(),
        birthDate: Joi.date().iso(),
    }),
}

export const getUserById: ValidateRequest = {
    params: Joi.object().keys({
        id: Joi.string().custom(validObjectId).required()
    })
}

export const updateUser: ValidateRequest = {
    params: Joi.object().keys({
        id: Joi.string().custom(validObjectId).required()
    }),
    body: Joi.object().keys({
        fullName: Joi.string().min(3).max(50),
        email: Joi.string().email(),
        phone: Joi.string().pattern(/^[0-9]{10,11}$/), 
        gender: Joi.string(),
        status: Joi.string(),
        birthDate: Joi.date().iso(),
    })
}

export const deleteUser: ValidateRequest = {
    params: Joi.object().keys({
        id: Joi.string().custom(validObjectId).required()
    })
};
