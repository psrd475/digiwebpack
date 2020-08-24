import { fromJS, Map, List } from 'immutable';
import {
  STORE_STEP1_DATA,
  STORE_STEP2_DATA,
  STORE_STEP3_DATA,
} from 'Actions/actionConstants';

const initialState = {
  agencyData: Map({
    Name: '',
    Country: '',
    Classification: '',
    Website: '',
    RegisterNo: '',
    RegistryFile: '',
    CreateDate: '0000-00-00',
    ExpiryDate: '0000-00-00',
    About: '',
    AgencyLogo: '',
    OwnerList: List([]),
  }),
  LicenseData: Map({
    embassy_Available: true,
    LicenceNo: '',
    LicenceFile: '',
    LicenceCreateDate: '0000-00-00',
    LicenceExpiryDate: '0000-00-00',
    FTAV_Available: true,
    FMembershipNo: '',
    FFile: '',
    FCreateDate: '0000-00-00',
    FExpiryDate: '0000-00-00',
    TUTTA_Available: true,
    TMembershipNo: '',
    TFile: '',
    TCreateDate: '0000-00-00',
    TExpiryDate: '0000-00-00',
  }),
  contactData: Map({
    TelNo: '',
    MobileNo: '',
    FaxNo: '',
    Email: '',
    Branch: List([])
  })
}

const initialImmutableState = fromJS(initialState);

export default function reducer(state = initialImmutableState, action = {}) {
  switch (action.type) {
    case STORE_STEP1_DATA:
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
    case STORE_STEP2_DATA:
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
    case STORE_STEP3_DATA:
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
