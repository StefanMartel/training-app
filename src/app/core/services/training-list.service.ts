import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectTrainings, maxTrainingId } from '../store/training-list/training-list.selector';
import { AddTrainingAction, DeleteTrainingAction } from 'src/app/core/store/training-list/training-list.action';
import { Observable } from 'rxjs';

@Injectable()
export class TrainingService {

    maxId : number =0;

    constructor(
        public store: Store<any>
    ) {      
        this.store.select(maxTrainingId).subscribe(
            data=> {
                console.log('maxId', data);
                this.maxId=data
            }
        )
    }

    getTrainingList(): Observable<any>{
       return this.store.select(selectTrainings);
    }

    getMaxId(): Observable<any>{
        return  this.store.select(maxTrainingId);
    }

    addTraining(trainingLabel: string){
        this.store.dispatch(new AddTrainingAction({
            login: 'SM',
            id: this.maxId++,
            title: trainingLabel,
            creationDate: new Date()
        }));
    }

    deleteTraining(trainingId: number){
        this.store.dispatch(new DeleteTrainingAction(trainingId));
    }

}
