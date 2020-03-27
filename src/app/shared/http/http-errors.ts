import { throwError } from 'rxjs';
import { ErrorResponse } from '../models/error-response.model';


export class HttpErrors {

    constructor() { }

    protected handleError(code: number, message: string = 'Error URL est un truc du genre') {
        return throwError(new ErrorResponse(code, message));
    }

}
