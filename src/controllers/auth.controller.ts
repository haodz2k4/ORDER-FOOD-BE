import { catchAsync } from "../utils/catch-async";
import { Request, Response } from "express";
import { Res } from "../utils/response";
import { AuthService } from "../services/auth.service";

//[POST] 'auth/login'
export const login = catchAsync(async (req: Request, res: Response) => {
    const {email, password} = req.body;
    const data = await AuthService.login(email, password);
    Res({
        res,
        message: "Login",
        data
    })
})


//[POST] 'auth/register'
export const register = catchAsync(async (req: Request, res: Response) => {
    await AuthService.register(req.body);
    Res({
        res,
        message: "Please check your email to verify"
    })
})

