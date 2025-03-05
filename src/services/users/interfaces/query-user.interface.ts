import { GeneralQuery } from "../../../common/interfaces/general-query.interface";
import { UserGender, UserStatus } from "../../../constants/model.constant";



export interface QueryUser extends GeneralQuery {
    status?: UserStatus;
    gender?: UserGender;
}