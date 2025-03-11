import status from 'http-status';
import { UsersService } from '../services/users/users.service';
import { catchAsync } from './../utils/catch-async';
import { Request, Response } from 'express';
import { HttpException } from '../utils/http-error';
import { Res } from '../utils/response';
import { UserDto } from '../dto/user.dto';

//GET /users 
export const getUsers = catchAsync(async(req: Request, res: Response) => {
    const users = await UsersService.getMany(req.query);
    Res({
        res,
        message: 'Get users',
        data: users
    })
})

//GET /users/:id
export const getUserById = catchAsync(async (req: Request, res: Response) => {
    const {id} = req.params;
    const user = await UsersService.getOne(id);
    if(!user) {
        throw new HttpException(status.NOT_FOUND, "User is not found")
    }
    Res<UserDto>({
        res,
        message: 'Get user by id',
        data: user
    })
})

//POST /users
export const createUser = catchAsync(async (req: Request, res: Response) => {
    const body = req.body;
    const user = await UsersService.create(body);
    Res<UserDto>({
        res,
        statusCode: status.CREATED,
        message: 'Create user',
        data: user 
    })
})

//UPDATE /users/:id
export const updateUser = catchAsync(async (req: Request, res: Response) => {
    const {id} = req.params;
    const body = req.body;
    const user = await UsersService.update(id,body);
    Res({
        res,
        message: 'Update user',
        data: user 
    })
})

//DELETE /users/:id
export const removeUser = catchAsync(async (req: Request, res: Response) => {
    const {id} = req.params;
    await UsersService.remove(id);
    Res({res, statusCode: status.NO_CONTENT})
})