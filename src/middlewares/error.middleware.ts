import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import { HttpException, ValidationException } from "../utils/error";
import status from "http-status";
import { SERVER_ERROR_MESSAGE } from "../constants/message.constant";



export const errorMiddleware = (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {

    if(err instanceof HttpException) {
        res
            .status(err.statusCode)
            .json({
                statusCode: err.statusCode,
                message: err.message,
                path: req.url 
            })
    } else if (err instanceof ValidationException) {
        res
            .status(err.statusCode)
            .json({
                statusCode: err.statusCode,
                message: err.message,
                errors: err.errors,
                path: req.url 
            })
    } else {
        res
            .status(status.INTERNAL_SERVER_ERROR)
            .json({
                message: SERVER_ERROR_MESSAGE,
                statusCode: status.INTERNAL_SERVER_ERROR,
                path: req.url
            })
    }

    next()
}