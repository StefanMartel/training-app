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
        case TrainingListActionTypes.ADD_TRAINING:
            state.trainings.push(action.training)
            return {...state, 
                    trainings: state.trainings,
                    loading: true
                };
        case TrainingListActionTypes.ADD_TRAINING_COMPLETED:
        case TrainingListActionTypes.DELETE_TRAINING_COMPLETED:
                return {...state, 
                        loading: false
                    };
        case TrainingListActionTypes.DELETE_TRAINING:
            return {...state,
                    trainings: state.trainings.filter((el) => el.id !== action.trainingId)
            }
        default:
            return state;
    }
};
