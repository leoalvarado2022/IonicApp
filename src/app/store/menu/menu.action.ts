import {Action} from '@ngrx/store';

export enum MenuActionTypes {
  AddProfile = '[Menu] ADD_PROFILE',
}

export class AddProfile implements Action {
  readonly type = MenuActionTypes.AddProfile;

  constructor(public payload?: any) {
  }
}


export type actions = AddProfile;
