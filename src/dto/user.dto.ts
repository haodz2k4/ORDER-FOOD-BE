import { Exclude, Expose } from "class-transformer";
import { UserGender, UserStatus } from "../constants/model.constant";

@Exclude()
export class UserDto {

    @Expose()
    _id: string;

    @Expose()
    fullName: string;

    @Expose()
    avatar: string;

    @Expose()
    email: string;

    @Expose()
    phone: string;

    @Expose()
    gender: UserGender;

    @Expose()
    status: UserStatus;

    @Expose()
    createdAt: Date;

    @Expose()
    updatedAt: Date;
}