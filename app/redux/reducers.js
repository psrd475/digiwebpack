import { combineReducers } from 'redux-immutable';
import notification from './modules/notification';
import agency from './modules/agency';
import auth from './modules/auth';

export default function createReducer() {
  const rootReducer = combineReducers({
    auth,
    notification,
    agency
  });

  return rootReducer;
}
