import { combineReducers } from 'redux';
import authReducer from './auth.reducer';

const rootReducer = combineReducers({
  userState: authReducer
});

export default rootReducer;
