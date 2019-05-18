import { ProfileActionTypes, SET_USER_PROFILE, User } from './types';
import { simpleAction } from '../utils';

export const setUserProfile = (user: User): ProfileActionTypes =>
  simpleAction(SET_USER_PROFILE, user);
