import { SortOrder } from "mongoose";


export interface GeneralQuery {
    searchBy?: string;
    keyword?: string;
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: SortOrder;
    startCreatedAt?: Date;
    endCreatedAt?: Date;
    startUpdatedAt?: Date;
    endUpdatedAt?: Date;
}