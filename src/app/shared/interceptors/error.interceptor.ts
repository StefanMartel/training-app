import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrors } from '../http/http-errors';

@Injectable()
export class ErrorInterceptor extends HttpErrors implements HttpInterceptor {

    constructor() {
        super();
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((err: HttpErrorResponse, caught: Observable<any>) => {
                return this.handleError(err.status, err.message);
            })
        );
    }
}
