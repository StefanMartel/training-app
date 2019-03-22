import { TrainingListActions, TrainingListActionTypes } from './training-list.action';


export let initialState = [];

export function reducer(state = initialState, action: TrainingListActions) {
    switch (action.type) {
        case TrainingListActionTypes.SHOW_TRAINING_LIST:
            return [...state, action.payload];
        case TrainingListActionTypes.ADD_TRAINING:
            return [...state, action.payload];
        case TrainingListActionTypes.DELETE_TRAINING:
            const product = action.payload;
            return state.filter((el) => el.id !== product.id);
        default:
            return state;
    }
}