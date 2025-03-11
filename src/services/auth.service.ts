import { UsersService } from "./users.service";
import { HttpException } from "../utils/error";
import status from "http-status";



export class AuthService {

    static async login(email: string, password: string)  {
        const user = await UsersService.getUserByEmail(email);
        if(!user || !await user.isMatchPassword(password)) {
            throw new HttpException(status.UNAUTHORIZED,"Invalid email or password");
        }
        
    }
}