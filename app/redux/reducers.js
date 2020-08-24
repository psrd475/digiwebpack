import { combineReducers } from 'redux-immutable';
import ui from './modules/ui';
import notification from './modules/notification';
import AgencyRegistration from './modules/AgencyRegistration';

export default function createReducer() {
  const rootReducer = combineReducers({
    ui,
    notification,
    AgencyRegistration
  });

  return rootReducer;
}
