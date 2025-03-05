import status from 'http-status';
import { UsersService } from '../services/users/users.service';
import { catchAsync } from './../utils/catch-async';
import { Request, Response } from 'express';

//GET /users 
export const getUsers = catchAsync(async(req: Request, res: Response) => {
    const users = await UsersService.getMany(req.query);
    res.status(status.OK).json(users);
})

//GET /users/:id
export const getUserById = catchAsync(async (req: Request, res: Response) => {
    const {id} = req.params;
    const user = await UsersService.getOne(id);
    res.status(status.OK).json(user);
})

//POST /users
export const createUser = catchAsync(async (req: Request, res: Response) => {
    const body = req.body;
    const user = await UsersService.create(body);
    res.status(status.OK).json(user);
})

//UPDATE
export const updateUser = catchAsync(async (req: Request, res: Response) => {
    const {id} = req.params;
    const body = req.body;
    const user = await UsersService.update(id,body);
    res.status(status.OK).json(user);
})

//DELETE 
export const deleteUser = catchAsync(async (req: Request, res: Response) => {
    const {id} = req.params;
    await UsersService.delete(id);
    res.status(status.NO_CONTENT);
})