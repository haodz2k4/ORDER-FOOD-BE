import { Response } from "express"
import { DefaultResponseMessage } from "../constants/app.constant";

interface ResponseParam<T> {
    res: Response
    statusCode?: number,
    message?: string,
    data?: T 
}

export const Res = <T = unknown>(params: ResponseParam<T>) => {
    const {res, statusCode = 200, message = DefaultResponseMessage, data} = params;
    res.status(statusCode).json({
        message: message,
        statusCode,
        data
    })
}