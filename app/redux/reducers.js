import { combineReducers } from 'redux-immutable';
import notification from './modules/notification';
import agencyreg from './modules/agencyreg';

export default function createReducer() {
  const rootReducer = combineReducers({
    notification,
    agencyreg
  });

  return rootReducer;
}
