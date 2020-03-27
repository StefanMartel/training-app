import { createSelector } from '@ngrx/store';

// La première fonction amène vers le state todos
export const selectTrainingListState = (state) => {
    return state.reducers.training;
};

// Et à partir de celle-ci, on créer une autre fonction qui renverra data
export const selectTrainingById = createSelector(selectTrainingListState,
    (trainings) => trainings.filter((training) => training.id = 3)
);

// Et à partir de celle-ci, on créer une autre fonction qui renverra data
export const selectTrainings = createSelector(selectTrainingListState, (trainings) => {
    return Array.isArray(trainings.trainings) ? trainings.trainings : [];
});


export const maxTrainingId = createSelector(selectTrainingListState, (trainings) => {
    if (!Array.isArray(trainings.trainings)) {
       return 0;
    }
    return trainings.trainings.reduce( (max, value) => {
        return ( value.id > max ? value.id : max );
      }, 0);
});
