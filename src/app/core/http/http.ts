import { Observable, of } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';

import { IHttp } from './i-http';
import { HttpErrors } from './http-errors';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export class HttpRepo extends HttpErrors implements IHttp {

    private headers: HttpHeaders;

    constructor(private http: HttpClient) {
        super();
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    }


    httpCallPost(pathToCall: string, objToSend: any) {
        return this.http.post(environment.backEndurl + ':' + environment.backEndPort +'/'+ pathToCall, objToSend, { headers: this.headers })
            .pipe(
                retry(3),
                map(res => res),
                catchError(error => of(this.handleServerResponseError))
            );
    }

    httpCallGet(pathToCall: string): Observable<any> {
        return this.http.get(environment.backEndurl + ':' + environment.backEndPort +'/'+ pathToCall, { headers: this.headers })
            .pipe(
                retry(3),
                map(res => res),
                catchError(error => of(this.handleServerResponseError))
            );
    }

    httpCallDelete(pathToCall: string): Observable<any> {
        return this.http.delete(environment.backEndurl + ':' + environment.backEndPort +'/'+ pathToCall, { headers: this.headers })
            .pipe(
                retry(3),
                map(res => res),
                catchError(error => of(this.handleServerResponseError))
            );
    }

}
