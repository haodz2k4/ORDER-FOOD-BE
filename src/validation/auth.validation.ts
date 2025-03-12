import Joi from "joi";
import { ValidateRequest } from "../common/interfaces/validate-req.interface";
import { UserGender } from "../constants/model.constant";


export const login: ValidateRequest = {
    body: Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })
}


export const register: ValidateRequest = {
    body: Joi.object().keys({
        fullName: Joi.string().min(3).max(50).required(),
        email: Joi.string().email().required(),
        phone: Joi.string().pattern(/^[0-9]{10,11}$/), 
        password: Joi.string().min(6).max(50).required(),
        gender: Joi.string().valid(...Object.values(UserGender)),
        birthDate: Joi.date().iso(),
    }),
}

