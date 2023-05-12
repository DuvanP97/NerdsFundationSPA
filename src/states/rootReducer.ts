import { AnyAction, CombinedState, combineReducers, Reducer } from '@reduxjs/toolkit';
import { RootState } from '../states';
import storage from 'redux-persist/lib/storage';
import characterSlice from './slices/characters.slice';
import planetSlice from './slices/planets.slice';
import shipsSlice from './slices/ships.slice';

export const appReducer = combineReducers({
  characterData: characterSlice,
  characterDetail: characterSlice,
  planetsData: planetSlice,
  shipsData: shipsSlice,
});

export const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer: Reducer<CombinedState<any>, AnyAction> = (
  state: RootState,
  action: AnyAction
) => {
  if (action.type === 'CLEAN/cleanState') {
    storage.removeItem('persist:root');
    state = {} as RootState;
  }
  return appReducer(state, action);
};

export default rootReducer;
