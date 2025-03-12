import { User } from "../users/user.interface";


export interface Register extends Omit<User, 'status' | 'verified'> {

}