import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { TrainingModel } from '../../models/training.model';

export const featureAdapter: EntityAdapter<TrainingModel> = createEntityAdapter<TrainingModel>({
    selectId: model => model.id,
    sortComparer: (a: TrainingModel, b: TrainingModel): number =>
        b.creationDate.toString().localeCompare(a.creationDate.toString())
});

export interface TrainingState extends EntityState<TrainingModel>{
    trainings: Array<TrainingModel>,
    loading: boolean
}

export const initialState: TrainingState = featureAdapter.getInitialState(
{
    trainings : [],
    loading: false
});
