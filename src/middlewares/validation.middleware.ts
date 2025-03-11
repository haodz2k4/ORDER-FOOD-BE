import { Request, Response, NextFunction } from "express";
import status from "http-status";
import { ObjectSchema } from "joi";
import { ValidationException } from "../utils/error";

export const validationMiddleware = (schema: {
  body?: ObjectSchema;
  query?: ObjectSchema;
  params?: ObjectSchema;
}) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const validationErrors: string[] = [];

    if (schema.body) {
      const { error } = schema.body.validate(req.body, { abortEarly: false });
      if (error) validationErrors.push(...error.details.map((err) => err.message));
    }

    if (schema.query) {
      const { error } = schema.query.validate(req.query, { abortEarly: false });
      if (error) validationErrors.push(...error.details.map((err) => err.message));
    }

    if (schema.params) {
      const { error } = schema.params.validate(req.params, { abortEarly: false });
      if (error) validationErrors.push(...error.details.map((err) => err.message));
    }

    if (validationErrors.length > 0) {
        throw new ValidationException(
          status.BAD_REQUEST,
          "Validation error",
          validationErrors
        )
    }

    next();
  };
};
