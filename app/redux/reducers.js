import { combineReducers } from 'redux-immutable';
import notification from './modules/notification';
import AgencyRegistration from './modules/AgencyRegistration';

export default function createReducer() {
  const rootReducer = combineReducers({
    notification,
    AgencyRegistration
  });

  return rootReducer;
}
