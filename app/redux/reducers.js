import { combineReducers } from 'redux-immutable';
import notification from './modules/notification';
import AgencyRegistration from './modules/AgencyRegistration';
import auth from './modules/auth';

export default function createReducer() {
  const rootReducer = combineReducers({
    auth,
    notification,
    AgencyRegistration
  });

  return rootReducer;
}
