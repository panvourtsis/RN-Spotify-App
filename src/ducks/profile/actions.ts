import * as firebaseUserProvider from 'providers/firebase/UserProvider';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { User } from 'ducks/authentication';
import { ProfileActionTypes, SET_USER_PROFILE, UNSET_USER_PROFILE } from './types';
import { simpleAction } from '../utils';

export const setUserProfile = (user: User): ProfileActionTypes =>
  simpleAction(SET_USER_PROFILE, user);

export const unsetUserProfile = (): ProfileActionTypes => simpleAction(UNSET_USER_PROFILE);

export const fetchUserProfile = (userId: string) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  const finalUser = await firebaseUserProvider.fetchUserData(userId);
  dispatch(setUserProfile(finalUser));
};
