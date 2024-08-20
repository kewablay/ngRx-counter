import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { counterReducer } from './counter.reducer';

export interface State {
  counter: number; 
}

// add types or interface for your store here 

export const reducers: ActionReducerMap<State> = {
  // add reducers here
  counter: counterReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
