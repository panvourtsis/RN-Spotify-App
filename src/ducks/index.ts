import { combineReducers } from 'redux';
import nav from './navigation/reducer';
import { Navigation } from './navigation/types';
import profile from './profile/reducer';
import { ProfileReducer } from './profile/types';

export interface AppState {
  nav: Navigation;
  profile: ProfileReducer;
}

export default combineReducers<AppState>({
  nav,
  profile,
});
