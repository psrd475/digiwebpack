import { fromJS, Map, List } from 'immutable';
import {
  AGENCY_REGISTER
} from 'Actions/actionConstants';

const initialState = {
  agencyData: Map({
    travelagencyname: '',
    country: '',
    agencyclassification: '',
    website: '',
    commercialregistrationno: '',
    commercialregistryfile: '',
    creatingdatecommercialregistry: '',
    expirydatecommercialregistration: '',
    about: '',
    uploadphoto: '',
    addowner: List([]),
    embassyAvailable: true,
    embassy: Map({
      embassyLicenceno: '',
      embassyLicenceFile: '',
      embassyLicenceCreateDate: '',
      embassyLicenceExpiryDate: ''
    }),
    ftavAvailable: true,
    ftav: Map({
      ftavMembershipNo: '',
      ftavFile: '',
      ftavMembershipCreationDate: '',
      ftavMembershipExpiryDate: '',
    }),
    tuttaAvailable: true,
    tutta: Map({
      tuttaMembreshipNo: '',
      tuttaMembreshipFile: '',
      tuttaMembreshipCreationDate: '',
      tuttaMembreshipExpiryDate: '',
    }),
    telNo: '',
    mNo: '',
    faxNo: '',
    email: '',
    addBranch: List([])
  })
}

const initialImmutableState = fromJS(initialState);

export default function reducer(state = initialImmutableState, action = {}) {
  switch (action.type) {
    case AGENCY_REGISTER:
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
