import userModel from "../../models/user.model";
import { CreateUser } from "./interfaces/create-user.interface";
import { QueryUser } from "./interfaces/query-user.interface";
import { UpdateUser } from "./interfaces/update-user.interface";



export class UsersService{

    static async create(createData: CreateUser) {
        return await userModel.create(createData);
    }

    static async getMany(query?: QueryUser)  {
        return await userModel.find()
    }

    static async getOne(id: string) {
        return await userModel.findById(id);
    }
    static async update(id: string, data?: UpdateUser){
        return await userModel.findByIdAndUpdate({id})
    }
    static async delete(id: string) {
        await userModel.deleteOne({id});
    }
}