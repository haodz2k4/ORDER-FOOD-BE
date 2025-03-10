import winston from 'winston';
import { NextFunction, Request, Response } from "express";
import logger from "../config/logger";
const console = new winston.transports.Console();

export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    
    const logEntry = {
        method: req.method,
        url: req.url
    }
    
    logger.add(console).info(logEntry)
    next();
}