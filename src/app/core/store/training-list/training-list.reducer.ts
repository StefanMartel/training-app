import { TrainingListActions, TrainingListActionTypes } from './training-list.action';
import { TrainingState, initialState } from './training-list.state';

export const trainingReducer = (state: TrainingState = initialState, action: TrainingListActions) => {
    switch (action.type) {
        case TrainingListActionTypes.GET_TRAINING_LIST:
            return {...state, 
                    loading: true
                };
        case TrainingListActionTypes.GET_TRAINING_LIST_COMPLETED:
            return {...state, 
                    trainings: action.trainings,
                    loading: false
                };
        case TrainingListActionTypes.ADD_TRAINING_COMPLETED:
            state.trainings.push(action.training)
            return {...state, 
                    trainings: state.trainings,
                    loading: false
                };
        case TrainingListActionTypes.ADD_TRAINING:
        case TrainingListActionTypes.DELETE_TRAINING:
                return {...state, 
                        loading: true
                    };
        case TrainingListActionTypes.DELETE_TRAINING_COMPLETED:
            return {...state,
                    trainings: state.trainings.filter((el) => el.id !== action.trainingId),
                    loading: false
            }
        default:
            return state;
    }
};
