import { NextFunction } from "express";

export type FC =  (req: Request, Res: Response, next?: NextFunction) => Promise<any>


export const catchAsync = (fc: FC) => {

    return async (req: Request, res: Response, next?: NextFunction): Promise<any> => {
        try {
           await fc(req, res, next);
        } catch (error) {
            next(error);
        }
    }
}