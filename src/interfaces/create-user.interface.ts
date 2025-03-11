import { UserGender, UserStatus } from "../constants/model.constant";


export interface CreateUser {
    fullName: string;
    email: string;
    phone: string;
    password: string;
    gender: UserGender;
    status?: UserStatus;
    birthDate?: Date;

}