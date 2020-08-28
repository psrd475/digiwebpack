import { fromJS, List } from 'immutable';
import { SET_AGENCY_DATA } from 'Actions/actionConstants';

const initialState = {
  agency_name: '',
  email: '',
  phone_number: '',
  telephone_number: '',
  fax_number: '',
  category: '',
  country: '',
  website: '',
  agency_description: '',
  agency_logo: '',
  commercial_registration_no: '',
  commercial_registration_file: '',
  commercial_registration_date: '',
  commercial_registration_expiry_date: '',
  embassy_licensed: true,
  embassy_license_no: '',
  embassy_license_file: '',
  embassy_license_date: '',
  embassy_license_expiry_date: '',
  FTAV_registration: true,
  FTAV_membership_no: '',
  FTAV_membership_file: '',
  FTAV_membership_date: '',
  FTAV_membership_expiry_date: '',
  TUTTA_registration: true,
  TUTTA_membership_no: '',
  TUTTA_membership_file: '',
  TUTTA_membership_date: '',
  TUTTA_membership_expiry_date: '',
  agency_owners: List([]),
  agency_branches: List([])
}

const initialImmutableState = fromJS(initialState);

export default function reducer(state = initialImmutableState, action = {}) {
  switch (action.type) {
    case SET_AGENCY_DATA:
      return state.withMutations((mutableState) => {
        for (const [key, value] of Object.entries(action.payload)) {
          if (value instanceof Array || value instanceof Object) {
            const immutableValue = fromJS(value);
            mutableState
              .set(key, immutableValue)
          } else {
            mutableState
              .set(key, value)
          };
        };
      });
    default:
      return state;
  }
}
