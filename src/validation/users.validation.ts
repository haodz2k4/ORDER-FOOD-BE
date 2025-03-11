import Joi from "joi";
import { UserGender, UserStatus } from "../constants/model.constant";
import { queryValidate } from "./common/query-validate.common";
import { ValidateRequest } from "../common/interfaces/validate-req.interface";
import { validObjectId } from "./common/custom.common";


export const getUsers: ValidateRequest = {
    query: Joi.object().keys({
        ...queryValidate,
        gender: Joi.valid(UserGender),
        status: Joi.valid(UserStatus)
    })
}

export const createUser: ValidateRequest = {
    body: Joi.object().keys({
        fullName: Joi.string().min(3).max(50).required(),
        email: Joi.string().email().required(),
        phone: Joi.string().pattern(/^[0-9]{10,11}$/).required(), 
        password: Joi.string().min(6).max(50).required(),
        gender: Joi.string().valid(...Object.values(UserGender)).required(),
        status: Joi.string().valid(...Object.values(UserStatus)),
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
        fullName: Joi.string().min(3).max(50).optional(),
        email: Joi.string().email().optional(),
        phone: Joi.string().pattern(/^[0-9]{10,11}$/).optional(), 
        gender: Joi.string().valid(...Object.values(UserGender)).optional(),
        status: Joi.string().valid(...Object.values(UserStatus)).optional(),
        birthDate: Joi.date().iso().optional(),
    })
}

export const deleteUser: ValidateRequest = {
    params: Joi.object().keys({
        id: Joi.string().custom(validObjectId).required()
    })
}