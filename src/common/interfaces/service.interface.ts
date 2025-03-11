

export interface Service {
    create(data: unknown): Promise<unknown>;
    getMany(query?: unknown): Promise<unknown>;
    getOne(id: string): Promise<unknown>;
    updateOne(id: string, data: unknown): Promise<unknown>;
    remove(id: string) :Promise<void>;
}