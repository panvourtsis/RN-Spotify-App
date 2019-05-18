import { User } from 'ducks/authentication';

export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const UNSET_USER_PROFILE = 'UNSET_USER_PROFILE';

export interface setProfileInfoAction {
  type: typeof SET_USER_PROFILE;
  payload: User;
}

export interface unsetProfileInfoAction {
  type: typeof UNSET_USER_PROFILE;
}

export type ProfileActionTypes = setProfileInfoAction | unsetProfileInfoAction;

export interface Profile {
  user: User;
}

export type ProfileReducer = {
  details: User;
};
