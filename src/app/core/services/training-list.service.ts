import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectTrainings } from '../store/training-list/training-list.selector';
import { Observable } from 'rxjs';

@Injectable()
export class TrainingService {

    constructor(
        public store: Store<any>
    ) {      
    }

    getTrainingList(): Observable<any>{
       return this.store.pipe(select(selectTrainings));
    }

}
