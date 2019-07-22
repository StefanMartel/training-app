import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';

import { TrainingListActionTypes, AddTrainingAction, GetTrainingListAction, GetTrainingListCompletedAction, AddTrainingCompletedAction, DeleteTrainingAction, DeleteTrainingCompletedAction, NoAction } from './training-list.action';
import { HttpRepo } from '../../http/http';
import { UrlConfiguration } from '../../http/configuration/url.configuration';
import { TranslateService } from '@ngx-translate/core';
import { HttpResponse } from '@angular/common/http';
import { TrainingService } from '../../services/training-list.service';



@Injectable()
export class TrainingListEffects {

  constructor(
      private actions$: Actions,
      private httpRepo: HttpRepo,
      private urlConfiguration: UrlConfiguration,
      private trainingService: TrainingService,
      private snackBar: MatSnackBar,
      private translate: TranslateService
    ) {}

  @Effect()
  getTrainingList$: Observable<Action> = this.actions$.pipe(
      ofType(TrainingListActionTypes.GET_TRAINING_LIST),
      switchMap((option: GetTrainingListAction)=> {
        return this.trainingService.getTrainingListBack(option.userLogin)
        .pipe(
          map((trainings) => {           
            return new GetTrainingListCompletedAction(trainings.body)
          })
        )
      })
  );

  @Effect()
  addTraining$: Observable<Action> = this.actions$.pipe(
      ofType(TrainingListActionTypes.ADD_TRAINING),
      switchMap((option: AddTrainingAction)=> {
        return this.trainingService.addTrainingBack(option.training)
        .pipe(
          map((dataReturn) => {  
            if(dataReturn.status=='201'){   
              this.snackBar.open(this.translate.instant('CONFIRM.ACTION.ADD_TRAINING'))     
              return new AddTrainingCompletedAction(option.training);
            } else{
              this.snackBar.open(this.translate.instant('CONFIRM.ACTION.ADD_TRAINING_ERROR'))
              return new NoAction();
            }
          })
        )
      })
  );

  @Effect()
  deleteTraining$: Observable<Action> = this.actions$.pipe(
      ofType(TrainingListActionTypes.DELETE_TRAINING),
      switchMap((option: DeleteTrainingAction)=> {
        return this.trainingService.deleteTrainingBack(option.trainingId)
        .pipe(
          map((dataReturn) => {       
            if(dataReturn.status=='204'){  
              this.snackBar.open(this.translate.instant('CONFIRM.ACTION.DELETE', {'objet': 'Scéance'}))
              return new DeleteTrainingCompletedAction(option.trainingId);
            } else{
              this.snackBar.open(this.translate.instant('CONFIRM.ACTION.DELETE_TRAINING_ERROR'))
              return new NoAction();
            }
          })
        )
      })
  );

}
