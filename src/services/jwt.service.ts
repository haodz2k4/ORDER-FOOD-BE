import jwt from 'jsonwebtoken';
import { JwtType } from '../constants/jwt.constant';
import config from '../config/config';



export class JwtService {


    static async generateAccessToken(id: string) :Promise<string> {
        return await jwt.sign(
            {
                _id: id, 
                type: JwtType.ACCESS
            },
            config.JWT.ACCESS.SECRET,
            {
                expiresIn: config.JWT.ACCESS.EXPIRE 
            }
        );
    }

    static async generateRefreshToken(id: string): Promise<string> {
        return await jwt.sign(
            {
                _id: id,
                type: JwtType.REFRESH
            },
            config.JWT.REFRESH.SECRET,
            {
                expiresIn: config.JWT.REFRESH.EXPIRE
            }
        )
    }

    static async generateVerifyEmailToken(id: string) :Promise<string> {
        return await jwt.sign(
            {
                _id: id,
                type: JwtType.VERIFY_EMAIL
            },
            config.JWT.VERIFY_EMAIL.SECRET,
            {
                expiresIn: config.JWT.VERIFY_EMAIL.EXPIRE
            }
        )
    }
    
}