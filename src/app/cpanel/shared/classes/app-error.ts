export class AppError {
    constructor(public originalError?: any) {}
}

export class NotFoundError extends AppError {

}

export class BadInput extends AppError {

}
