import { Action } from '@ngrx/store';
import { TrainingModel } from '../../models/training.model';

export enum TrainingListActionTypes {
    GET_TRAINING_LIST= 'Training list get Request',
    GET_TRAINING_LIST_COMPLETED = 'Training list get completed',
    ADD_TRAINING = 'Training list add Request',
    ADD_TRAINING_COMPLETED = 'Training list add completed',
    DELETE_TRAINING = 'Training delete Request',
    DELETE_TRAINING_COMPLETED = 'Training delete completed',
    NO_ACTION = 'Aucune action de faite (suite à erreur dans l/effect)'
}

export class GetTrainingListAction implements Action {
    readonly type = TrainingListActionTypes.GET_TRAINING_LIST;
    constructor(public userLogin: string) { }
}

export class GetTrainingListCompletedAction implements Action {
    readonly type = TrainingListActionTypes.GET_TRAINING_LIST_COMPLETED;
    constructor(public trainings: Array<TrainingModel>) { }
}

export class AddTrainingAction implements Action {
    readonly type = TrainingListActionTypes.ADD_TRAINING;
    constructor(public training: TrainingModel) { }
}

export class AddTrainingCompletedAction implements Action {
    readonly type = TrainingListActionTypes.ADD_TRAINING_COMPLETED;
    constructor(public training: TrainingModel) { }
}

export class DeleteTrainingAction implements Action {
    readonly type = TrainingListActionTypes.DELETE_TRAINING;
    constructor(public trainingId: number) { }
}

export class DeleteTrainingCompletedAction implements Action {
    readonly type = TrainingListActionTypes.DELETE_TRAINING_COMPLETED;
    constructor(public trainingId: number) { }
}

export class NoAction implements Action{
    readonly type = TrainingListActionTypes.NO_ACTION;
}

export type TrainingListActions = 
    GetTrainingListAction | 
    GetTrainingListCompletedAction |
    AddTrainingAction | 
    AddTrainingCompletedAction |
    DeleteTrainingAction |
    DeleteTrainingCompletedAction |
    NoAction
    ;
