import { UserActions, UserActionTypes } from './user.action';


export let initialState = [];

export function reducer(state = initialState, action: UserActions) {
    switch (action.type) {
        case UserActionTypes.SHOW_USER:
            return [...state, action.payload];
        case UserActionTypes.ADD_USER:
            return [...state, action.payload];
        default:
            return state;
    }
}
