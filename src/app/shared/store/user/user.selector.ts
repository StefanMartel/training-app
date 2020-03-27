import { createSelector } from '@ngrx/store';

// La première fonction amène vers le state todos
export const selectUserState = (state) => state.reducers.user;

// Et à partir de celle-ci, on créer une autre fonction qui renverra data
export const selectUser = createSelector(selectUserState, (user) => user[0]);
