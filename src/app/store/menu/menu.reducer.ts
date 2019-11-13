import * as MenuAction from './menu.action';
import {MenuActionTypes} from './menu.action';
import * as reducers from '../../reducers/reducers'

export const initialState: reducers.State = {
  data: {}
};

export function MenuReducer(state:any = initialState, action: MenuAction.actions): reducers.State {
  switch (action.type) {
    case MenuActionTypes.AddProfile:

      return {
        ...state,
        data: {...action.payload}
      };
    default:
      return state;
  }
}

export const getProfile= (state: reducers.State) => state;
