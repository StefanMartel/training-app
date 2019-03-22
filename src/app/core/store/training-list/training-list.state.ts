import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { TrainingModel } from '../../models/training.model';

export const featureAdapter: EntityAdapter<
    TrainingModel
    > = createEntityAdapter<TrainingModel>({
        selectId: model => model.id,
        sortComparer: (a: TrainingModel, b: TrainingModel): number =>
            b.creationDate.toString().localeCompare(a.creationDate.toString())
    });

export interface State extends EntityState<TrainingModel> {
    isLoading?: boolean;
    error?: any;
}

export const initialState: State = featureAdapter.getInitialState(
    {
        isLoading: false,
        error: null
    }
);
