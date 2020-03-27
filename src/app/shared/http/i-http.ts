import { Observable } from 'rxjs';


export interface IHttp {
    httpCallPost(pathToCall: string, objToSend: any): Observable<any>;
    httpCallGet(pathToCall: string, varToSend: string): Observable<any>;
}
