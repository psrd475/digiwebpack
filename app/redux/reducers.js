import { combineReducers } from 'redux-immutable';
import ui from './modules/ui';
import notification from './modules/notification';
import agencyreg from './modules/agencyreg';

export default function createReducer() {
  const rootReducer = combineReducers({
    ui,
    notification,
    agencyreg
  });

  return rootReducer;
}
