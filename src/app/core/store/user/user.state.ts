import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { UserModel } from '../../models/user.model';

export const featureAdapter: EntityAdapter<UserModel> = createEntityAdapter<UserModel>({
    selectId: model => model.login
});

export interface State extends EntityState<UserModel> {
    isLoading?: boolean;
    error?: any;
}

export const initialState: State = featureAdapter.getInitialState(
    {
        isLoading: false,
        error: null
    }
);
