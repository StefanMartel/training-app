import { Headers, Http } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';

import { IHttp } from './i-http';
import { HttpErrors } from './http-errors';
import { environment } from 'src/environments/environment';


export class HttpRepo extends HttpErrors implements IHttp {

    private headers: Headers;

    constructor(private http: Http) {
        super();
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }


    httpCallPost(pathToCall: string, objToSend: any) {
        return this.http.post(environment.url + '/' + environment.port + pathToCall, objToSend, { headers: this.headers })
            .pipe(
                retry(3),
                map(res => res.json()),
                catchError(error => of(this.handleServerResponseError))
            );
    }

    httpCallGet(pathToCall: string, varToSend: string): Observable<any> {
        return this.http.get(environment.url + '/' + environment.port + pathToCall + varToSend, { headers: this.headers })
            .pipe(
                retry(3),
                map(res => res.json()),
                catchError(error => of(this.handleServerResponseError))
            );
    }

}
