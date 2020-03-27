import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IHttp } from './i-http';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export class HttpRepo implements IHttp {

    private headers: HttpHeaders;

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    }


    httpCallPost(pathToCall: string, objToSend: any): Observable<any> {
        return this.http.post(
            environment.backEndurl + ':' + environment.backEndPort + '/' + pathToCall,
            objToSend,
            { headers: this.headers, observe: 'response' }
        ).pipe(
            map(res => res)
        );
    }

    httpCallGet(pathToCall: string): Observable<any> {
        return this.http.get(
            environment.backEndurl + ':' + environment.backEndPort + '/' + pathToCall,
            { headers: this.headers, observe: 'response' }
        ).pipe(
            map(res => {
                console.log('RESULTAT GET', res);
                return res;
            })
        );
    }

    httpCallDelete(pathToCall: string): Observable<any> {
        return this.http.delete(
            environment.backEndurl + ':' + environment.backEndPort + '/' + pathToCall,
            { headers: this.headers, observe: 'response'}
        ).pipe(
            map(res => res)
        );
    }

}
