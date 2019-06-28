import { Action } from '@ngrx/store';

export enum UserActionTypes {
    SHOW_USER = 'User show Request',
    ADD_USER = 'User add request'
}

export class ShowUserAction implements Action {
    readonly type = UserActionTypes.SHOW_USER;
    constructor(public payload: any) { }
}

export class AddUserAction implements Action {
    readonly type = UserActionTypes.ADD_USER;
    constructor(public payload: any) { }
}

export type UserActions = ShowUserAction | AddUserAction;
