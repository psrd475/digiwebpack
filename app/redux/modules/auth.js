import { fromJS } from 'immutable';
import {
  SET_AUTH,
  REMOVE_AUTH
} from 'Actions/actionConstants';

const initialState = {
  isLoggedIn: false,
  userType: ''
};

const initialImmutableState = fromJS(initialState);

export default function reducer(state = initialImmutableState, action = {}) {
  switch (action.type) {
    case SET_AUTH:
      return state.withMutations((mutableState) => {
        mutableState
          .set('userType', action.payload)
          .set('isLoggedIn', true);
      });
    case REMOVE_AUTH:
      return state.withMutations((mutableState) => {
        mutableState
          .set('userType', '')
          .set('isLoggedIn', false);
      });
    default:
      return state;
  }
}
