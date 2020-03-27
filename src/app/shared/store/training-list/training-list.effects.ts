import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, EMPTY, empty } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';

import {
  TrainingListActionTypes,
  AddTrainingAction,
  GetTrainingListAction,
  GetTrainingListCompletedAction,
  AddTrainingCompletedAction,
  DeleteTrainingAction,
  DeleteTrainingCompletedAction,
  NoAction
} from './training-list.action';
import { TranslateService } from '@ngx-translate/core';
import { TrainingService } from '../../services/training-list.service';
import { InfoDisplayService } from '../../services/info-display.service';
import { typeOfMessageToDisplay } from '../../models/enums/message-to-display.model';



@Injectable()
export class TrainingListEffects {

  constructor(
      private actions$: Actions,
      private trainingService: TrainingService,
      private infoDisplayService: InfoDisplayService,
      private translate: TranslateService
    ) {}

  @Effect()
  getTrainingList$: Observable<Action> = this.actions$.pipe(
      ofType(TrainingListActionTypes.GET_TRAINING_LIST),
      switchMap((option: GetTrainingListAction) => {
        return this.trainingService.getTrainingListByUser(option.userLogin)
        .pipe(
          map(
            (trainings) => {
              console.log('TRAININGSsss', trainings);
              return new GetTrainingListCompletedAction(trainings.body);
            }
          ),
          catchError((error) => {
            console.log('EFFECT ERROR', error);
            return EMPTY;
          })
        );
      })
  );

  @Effect()
  addTraining$: Observable<Action> = this.actions$.pipe(
      ofType(TrainingListActionTypes.ADD_TRAINING),
      switchMap((option: AddTrainingAction) => {
        return this.trainingService.addTrainingBack(option.training)
        .pipe(
          map((dataReturn) => {
            this.infoDisplayService.displaySnackBarMessage(this.translate.instant('CONFIRM.ACTION.ADD_TRAINING'));
            return new AddTrainingCompletedAction(option.training);
          }),
          catchError((error) => {
            this.infoDisplayService.displaySnackBarMessage(
              this.translate.instant('CONFIRM.ACTION.ADD_TRAINING_ERROR'),
              typeOfMessageToDisplay.error
            );
            return EMPTY;
          }),
        );
      })
  );

  @Effect()
  deleteTraining$: Observable<Action> = this.actions$.pipe(
      ofType(TrainingListActionTypes.DELETE_TRAINING),
      switchMap((option: DeleteTrainingAction) => {
        return this.trainingService.deleteTrainingBack(option.trainingId)
        .pipe(
          map((dataReturn) => {
            this.infoDisplayService.displaySnackBarMessage(this.translate.instant('CONFIRM.ACTION.DELETE', {'objet': 'Scéance'}));
            return new DeleteTrainingCompletedAction(option.trainingId);
          }),
          catchError((error) => {
            this.infoDisplayService.displaySnackBarMessage(
              this.translate.instant('CONFIRM.ACTION.DELETE_TRAINING_ERROR'),
              typeOfMessageToDisplay.error
            );
            return EMPTY;
          }),
        );
      })
  );

}
