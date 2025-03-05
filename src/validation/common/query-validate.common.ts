import Joi from "joi";

export const queryValidate = Joi.object({
    searchBy: Joi.string(), 
    keyword: Joi.string(),
    page: Joi.number().integer().min(1),
    limit: Joi.number().integer().min(1),
    sortBy: Joi.string(),
    sortOrder: Joi.string().valid("asc", "desc"), 
    startCreatedAt: Joi.date().iso(),
    endCreatedAt: Joi.date().iso(),
    startUpdatedAt: Joi.date().iso(),
    endUpdatedAt: Joi.date().iso(),
});
