import { plainToInstance } from "class-transformer";
import { UserDto } from "../../dto/user.dto";
import userModel from "../../models/user.model";
import { CreateUser } from "./interfaces/create-user.interface";
import { QueryUser } from "./interfaces/query-user.interface";
import { UpdateUser } from "./interfaces/update-user.interface";



export class UsersService{

    static async create(createData: CreateUser) :Promise<UserDto> {
        const user = await userModel.create(createData);
        return plainToInstance(UserDto, user);
    }

    static async getMany(query?: QueryUser)  {
        return await userModel.find()
    }

    static async getOne(id: string) :Promise<UserDto> {
        const user = await userModel.findById(id);
        return plainToInstance(UserDto, user);
    }
    static async update(id: string, data?: UpdateUser): Promise<UserDto>{
        const user = await userModel.findByIdAndUpdate({id, data})
        return plainToInstance(UserDto, user);
    }
    static async delete(id: string) :Promise<void> {
        await userModel.deleteOne({id});
    }
}