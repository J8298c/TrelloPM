import { GET_USER } from '../types';

const initUserState = {
  user: {}
};

const authReducer = (state = initUserState, action) => {
  switch (action.type) {
    case GET_USER:
      if (action.user.password) {
        delete action.user.password;
      }
      return { ...state, user: action.user };

    default:
      return state;
  }
};

export default authReducer;
