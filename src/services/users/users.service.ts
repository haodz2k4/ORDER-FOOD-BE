import { UserDto } from './../../dto/user.dto';
import { plainToInstance } from "class-transformer";
import userModel from "../../models/user.model";
import { CreateUser } from "./interfaces/create-user.interface";
import { QueryUser } from "./interfaces/query-user.interface";
import { UpdateUser } from "./interfaces/update-user.interface";
import { DEFAULT_CURRENT_PAGE, DEFAULT_LIMIT, DEFAULT_SORT_BY, DEFAULT_SORT_ORDER } from "../../constants/default.constant";
import { getSkip, Pagination } from "../../utils/pagination";
import { PaginatedDto } from "../../common/dto/paginated.dto";
import { HttpException } from '../../utils/error';
import status from 'http-status';



export class UsersService{

    static async create(createData: CreateUser) :Promise<UserDto> {
        const {email} = createData;
        const isExists = await this.getUserByEmail(email);
        if(isExists) {
            throw new HttpException(status.BAD_REQUEST,"Email is already taken");
        }
        const user = await userModel.create(createData)
        return plainToInstance(UserDto, user);
    }

    static async getUserByEmail(email: string): Promise<UserDto | null> {
        return await userModel.findOne({email});

    }

    static async getMany(query: QueryUser): Promise<PaginatedDto<UserDto>> {
        const {
            page = DEFAULT_CURRENT_PAGE, 
            limit = DEFAULT_LIMIT, 
            sortBy = DEFAULT_SORT_BY,
            sortOrder = DEFAULT_SORT_ORDER,
        } = query
        const skip = getSkip(page, limit);
        const where = this.getFilter(query)
        const [items, total] = await Promise.all([
            userModel
                .find(where)
                .sort({[sortBy]: sortOrder})
                .skip(skip)
                .limit(limit),
            this.getTotalDocument(where)
        ])
        const pagination = new Pagination(page, limit, total)
        return plainToInstance(PaginatedDto<UserDto>,{
            items: plainToInstance(UserDto, items),
            pagination
        })
    }

    private static getFilter(queryUser: QueryUser): Record<string, unknown> {
        const {keyword, status, gender} = queryUser
        const where: Record<string, unknown> = {};
        if(keyword) {
            where.fullName = new RegExp(keyword,"i")
        }
        if(status) {
            where.status = status;
        }
        if(gender) {
            where.gender = gender;
        }
        return where
    }

    static async getTotalDocument(where?: Record<string, unknown>): Promise<number> {
        return await userModel.countDocuments(where)
    }

    static async getOne(id: string) :Promise<UserDto | null> {
        const user = await userModel.findOne({id});
        return plainToInstance(UserDto, user);
    }
    static async update(id: string, data?: UpdateUser): Promise<UserDto>{
        const user = await userModel.findOne({id});
        if(!user) {
            throw new HttpException(status.NOT_FOUND, "User is not found");
        }
        Object.assign(user, data);
        await user.save()
        return plainToInstance(UserDto, user);
    }
    static async remove(id: string) :Promise<void> {
        const user = await userModel.findOne({id});
        if(!user) {
            throw new HttpException(status.NOT_FOUND,"User is not found")
        }
        Object.assign(user, {deletedAt: new Date});
        await user.save()
    }
}