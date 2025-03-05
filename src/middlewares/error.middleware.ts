import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import { HttpException } from "../utils/http-error";
import status from "http-status";
import { SERVER_ERROR_MESSAGE } from "../constants/message.constant";



export const errorMiddleware = (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {

    if(err instanceof HttpException) {
        res.status(err.statusCode).json({err: err.message})
    } else {
        res.status(status.INTERNAL_SERVER_ERROR).json({message: SERVER_ERROR_MESSAGE})
    }

    next()
}