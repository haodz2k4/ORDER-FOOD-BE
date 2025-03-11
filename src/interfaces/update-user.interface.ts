import { CreateUser } from "./create-user.interface";


export interface UpdateUser extends Omit<Partial<CreateUser>, 'password'> {

}