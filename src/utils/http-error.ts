


export class HttpException extends Error {
    public statusCode: number;

    constructor(statusCode: number, message: string) {
        super(message)
        this.statusCode = statusCode;
        this.message = message;

        Error.captureStackTrace(this, this.constructor)
    }
}