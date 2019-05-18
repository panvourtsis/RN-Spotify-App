import { ProfileReducer, ProfileActionTypes, SET_USER_PROFILE, UNSET_USER_PROFILE } from './types';

const INITIAL_STATE: ProfileReducer = {
  details: {
    id: '',
    birthday: '',
    picture: '',
    friends: [],
    favorites: {},
  },
};

export default (state = INITIAL_STATE, action: ProfileActionTypes): ProfileReducer => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {
        details: action.payload,
      };

    case UNSET_USER_PROFILE:
      return INITIAL_STATE;

    default:
      return state;
  }
};
