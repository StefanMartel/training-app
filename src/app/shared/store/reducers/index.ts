import { MetaReducer, combineReducers} from '@ngrx/store';
import { trainingReducer } from '../training-list/training-list.reducer';
import { userReducer } from '../user/user.reducer';
import { environment } from 'src/environments/environment.prod';

export interface IAppState {
  'training': any;
  'user': any;
}

export const reducers = combineReducers({
  'training': trainingReducer,
  'user': userReducer,
});


export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [] : [];
