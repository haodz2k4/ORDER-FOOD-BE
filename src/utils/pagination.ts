


export const getSkip = (page: number, limit: number):number => {
    return (page - 1) * limit;
}

export class Pagination {

    page: number;

    limit: number;

    skip: number;

    total: number;

    pageSize: number;

    constructor(page: number, limit: number, total: number) {
        this.page = page;
        this.limit = limit;
        this.total = total
        this.skip = getSkip(page, limit);
        this.pageSize = Math.ceil(total / limit);
    }


}