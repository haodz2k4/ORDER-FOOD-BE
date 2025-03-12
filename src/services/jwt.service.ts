import jwt from 'jsonwebtoken';
import { JwtType } from '../constants/jwt.constant';
import config from '../config/config';



export class JwtService {


    static async generateAccessToken(id: string) :Promise<string> {
        return await jwt.sign(
            {
                id, 
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
                id,
                type: JwtType.REFRESH
            },
            config.JWT.REFRESH.SECRET,
            {
                expiresIn: config.JWT.REFRESH.EXPIRE
            }
        )
    }

    
}