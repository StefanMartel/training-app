import { Observable } from 'rxjs';
import { ErrorResponse } from '../models/error-response.model';


export class HttpErrors {

    constructor() { }

    protected handleServerResponseError(error: string = 'Error URL est un truc du genre') {
        return Observable.throw(new ErrorResponse('404', error));
    }

    protected handleDataTypeError(error: string) {
        return Observable.throw(new ErrorResponse('20', error));
    }

}
