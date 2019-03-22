import { Action } from '@ngrx/store';

export enum TrainingListActionTypes {
    SHOW_TRAINING_LIST = 'Training list show Request',
    ADD_TRAINING = 'Training list add Request',
    DELETE_TRAINING = 'Training list delete Request'
}

export class ShowTrainingListAction implements Action {
    readonly type = TrainingListActionTypes.SHOW_TRAINING_LIST;
    constructor(public payload: any) { }
}

export class AddTrainingAction implements Action {
    readonly type = TrainingListActionTypes.ADD_TRAINING;
    constructor(public payload: any) { }
}

export class DeleteTrainingAction implements Action {
    readonly type = TrainingListActionTypes.DELETE_TRAINING;
    constructor(public payload: any) { }
}

export type TrainingListActions = ShowTrainingListAction | AddTrainingAction | DeleteTrainingAction;
