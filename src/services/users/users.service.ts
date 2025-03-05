import userModel from "../../models/user.model";
import { CreateUser } from "./interfaces/create-user.interface";
import { QueryUser } from "./interfaces/query-user.interface";
import { UpdateUser } from "./interfaces/update-user.interface";



export class UsersService{

    static create(createData: CreateUser) {
        throw new Error("Method not implemented.");
    }

    static getMany(query?: QueryUser)  {
        throw new Error("Method not implemented.");
    }
    static getOne(id: string) {
        throw new Error("Method not implemented.");
    }
    static update(id: string, data?: UpdateUser){
        throw new Error("Method not implemented.");
    }
    static delete(id: string) {
        throw new Error("Method not implemented.");
    }


    
}