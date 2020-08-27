import * as types from './actionConstants';

// Notification
export const setNotif = (payload) => ({
  type: types.SET_NOTIF,
  payload
});

// Authentication
export const setAuth = (payload) => ({
  type: types.SET_AUTH,
  payload
});

// Agency
export const setAgencyData = (payload) => ({
  type: types.SET_AGENCY_DATA,
  payload
});
