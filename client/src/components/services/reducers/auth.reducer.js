import { GET_USER } from '../types';

const initUserState = {
  user: {}
};

const authReducer = (state = initUserState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.user };

    default:
      return state;
  }
};

export default authReducer;
