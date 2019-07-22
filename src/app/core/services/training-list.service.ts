import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTrainings, maxTrainingId } from '../store/training-list/training-list.selector';
import { AddTrainingAction, DeleteTrainingAction } from 'src/app/core/store/training-list/training-list.action';
import { Observable } from 'rxjs';
import { selectUser } from '../store/user/user.selector';
import { HttpRepo } from '../http/http';
import { UrlConfiguration } from '../http/configuration/url.configuration';
import { TrainingModel } from '../models/training.model';

@Injectable()
export class TrainingService {

    maxId : number =0;
    currentUser: string;

    constructor(
        public store: Store<any>,
        public httpRepo: HttpRepo,
        private urlConfiguration: UrlConfiguration
    ) {      
        this.store.select(maxTrainingId).subscribe(
            data=> {
                this.maxId=data
            }
        )

        this.store.select(selectUser).subscribe(
            user=> {
                this.currentUser = user.login;
            }
        )
    }

    getTrainingList(): Observable<any>{
       return this.store.select(selectTrainings);
    }

    getTrainingListBack(userLogin: string): Observable<any>{
        return this.httpRepo.httpCallGet(this.urlConfiguration.getBackEndUrl('getTrainingListByUser', [userLogin]))
    }

    getMaxId(): Observable<any>{
        return  this.store.select(maxTrainingId);
    }

    addTraining(trainingLabel: string){
        this.store.dispatch(new AddTrainingAction({
            login: this.currentUser,
            id: this.maxId +1,
            title: trainingLabel,
            creationDate: new Date()
        }));
    }

    addTrainingBack(training: TrainingModel): Observable<any>{
        return this.httpRepo.httpCallPost(this.urlConfiguration.getBackEndUrl('addTraining'), training);
    }

    deleteTraining(trainingId: number){
        this.store.dispatch(new DeleteTrainingAction(trainingId));
    }

    deleteTrainingBack(trainingId: number): Observable<any>{
        return this.httpRepo.httpCallDelete(this.urlConfiguration.getBackEndUrl('deleteTrainingByTrainingId',[trainingId]))
    }

}
