import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';

import { TrainingListActionTypes, AddTrainingAction, GetTrainingListAction, GetTrainingListCompletedAction, AddTrainingCompletedAction, DeleteTrainingAction, DeleteTrainingCompletedAction } from './training-list.action';
import { HttpRepo } from '../../http/http';
import { UrlConfiguration } from '../../http/configuration/url.configuration';
import { TranslateService } from '@ngx-translate/core';



@Injectable()
export class TrainingListEffects {

  constructor(
      private actions$: Actions,
      private httpRepo: HttpRepo,
      private urlConfiguration: UrlConfiguration,
      private snackBar: MatSnackBar,
      private translate: TranslateService
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
            this.snackBar.open(this.translate.instant('CONFIRM.ACTION.ADD_TRAINING'))      
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
            this.snackBar.open(this.translate.instant('CONFIRM.ACTION.DELETE', {'objet': 'Scéance'}))
            return new DeleteTrainingCompletedAction()
          })
        )
      })
  );

}
