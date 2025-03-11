import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";



export const validateMiddleware = (schema: {
    body?: ObjectSchema,
    query?: ObjectSchema,
    param?: ObjectSchema
}) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const options = { abortEarly: false, stripUnknown: true };
        const errors: Record<string, unknown> = {};

        if (schema.body) {
            const { error, value } = schema.body.validate(req.body, options);
            if (error) errors.body = error.details.map((err) => err.message);
            else req.body = value;
        }

        if (schema.query) {
            const { error, value } = schema.query.validate(req.query, options);
            if (error) errors.query = error.details.map((err) => err.message);
            else req.query = value;
        }

        if (schema.param) {
            const { error, value } = schema.param.validate(req.params, options);
            if (error) errors.params = error.details.map((err) => err.message);
            else req.params = value;
        }

        if (Object.keys(errors).length) {
            res.status(400).json({ errors });
            return;
        }

        next();
    };
};
