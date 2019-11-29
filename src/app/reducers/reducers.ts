import {environment} from '../../environments/environment';
import {ActionReducer, ActionReducerMap, createSelector, MetaReducer} from '@ngrx/store';
import * as fromMenu from '../store/menu/menu.reducer';


export interface State {
  data: any;
}

// menu profile
export const reducers: ActionReducerMap<any> = {
  menuProfile: fromMenu.MenuReducer
};

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    // console.log('state', state);
    // console.log('action', action);

    return reducer(state, action);
  };
}


export const metaReducers: MetaReducer<any>[] = !environment.production ? [debug] : [];

// menu profile
export const getProfileState = (state: any) => state.menuProfile;
export const getMenuProfile = createSelector(getProfileState, fromMenu.getProfile);
