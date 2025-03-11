import { Expose } from "class-transformer";
import { Pagination } from "../../utils/pagination";



export class PaginatedDto<T> {

    @Expose()
    pagination: Pagination;

    @Expose()
    items: T[];
    
}