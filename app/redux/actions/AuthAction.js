import * as types from './actionConstants';

export const setAuth = (payload) => ({
  type: types.SET_AUTH,
  payload
});
export const removeAuth = () => ({
  type: types.REMOVE_AUTH
});

