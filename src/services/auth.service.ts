import { UsersService } from "./users.service";
import { HttpException } from "../utils/error";
import status from "http-status";
import { JwtService } from "./jwt.service";
import { LoginDto } from "../dto/auth/LoginDto";
import { plainToInstance } from "class-transformer";
import config from "../config/config";
import ms from "ms";


export class AuthService {

    static async login(email: string, password: string) :Promise<LoginDto>  {
        const user = await UsersService.getUserByEmail(email);
        if(!user || !await user.isMatchPassword(password)) {
            throw new HttpException(status.UNAUTHORIZED,"Invalid email or password");
        }

        const [accessToken, refreshToken] = await Promise.all(
            [
                JwtService.generateAccessToken(user.id),
                JwtService.generateRefreshToken(user.id)
            ]
        )
        return plainToInstance(LoginDto,{
            _id: user.id,
            accessToken,
            refreshToken,
            expiresIn: ms(config.JWT.ACCESS.EXPIRE) / 1000
        })
    }
    
}