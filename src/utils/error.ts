export class HttpException extends Error {
    public statusCode: number;

    constructor(statusCode: number, message: string) {
        super(message);
        this.statusCode = statusCode;

        Error.captureStackTrace(this, this.constructor);
    }
}


export class ValidationException extends Error {
    public errors: string[];
    public statusCode: number;

    constructor(statusCode: number, message: string, errors: string[]) {
        super(message);
        this.errors = errors
        this.statusCode = statusCode;
        
        Error.captureStackTrace(this, this.constructor);
    }
}