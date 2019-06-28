import { createSelector } from '@ngrx/store';

// La première fonction amène vers le state todos
export const selectTrainingListState = (state) => state.trainingReducer;

// Et à partir de celle-ci, on créer une autre fonction qui renverra data
export const selectTrainingById = createSelector(selectTrainingListState, (trainings) => trainings);

// Et à partir de celle-ci, on créer une autre fonction qui renverra data
export const selectTrainings = createSelector(selectTrainingListState, (trainings) => trainings);
