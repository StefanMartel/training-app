import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

import { TrainingListActionTypes, AddTrainingAction, GetTrainingListAction, GetTrainingListCompletedAction, AddTrainingCompletedAction, DeleteTrainingAction, DeleteTrainingCompletedAction } from './training-list.action';
import { switchMap, map, tap } from 'rxjs/operators';
import { HttpRepo } from '../../http/http';
import { UrlConfiguration } from '../../http/configuration/url.configuration';


@Injectable()
export class TrainingListEffects {

  constructor(
      private actions$: Actions,
      private httpRepo: HttpRepo,
      private urlConfiguration: UrlConfiguration
    ) {}

  @Effect()
  getTrainingList$: Observable<Action> = this.actions$.pipe(
      ofType(TrainingListActionTypes.GET_TRAINING_LIST),
      switchMap((option: GetTrainingListAction)=> {
        return this.httpRepo.httpCallGet(this.urlConfiguration.getBackEndUrl('getTrainingListByUser', [option.userLogin]))
        .pipe(
          map((trainings) => {           
            return new GetTrainingListCompletedAction(trainings)
          })
        )
      })
  );

  @Effect()
  addTraining$: Observable<Action> = this.actions$.pipe(
      ofType(TrainingListActionTypes.ADD_TRAINING),
      switchMap((option: AddTrainingAction)=> {
        return this.httpRepo.httpCallPost(this.urlConfiguration.getBackEndUrl('addTraining'), option.training)
        .pipe(
          map(() => {           
            return new AddTrainingCompletedAction()
          })
        )
      })
  );

  @Effect()
  deleteTraining$: Observable<Action> = this.actions$.pipe(
      ofType(TrainingListActionTypes.DELETE_TRAINING),
      switchMap((option: DeleteTrainingAction)=> {
        return this.httpRepo.httpCallDelete(this.urlConfiguration.getBackEndUrl('deleteTrainingByTrainingId',[option.trainingId]))
        .pipe(
          map(() => {           
            return new DeleteTrainingCompletedAction()
          })
        )
      })
  );

}
