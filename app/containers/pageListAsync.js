import React from 'react';
import { Loading } from 'Components';
import loadable from '../utils/loadable';

// Landing Page
export const Landing = loadable(() =>
  import('./Landing'), {
  fallback: <Loading />,
});

// Page Agency Register
export const AgencyRegister = loadable(() =>
  import('./Page/AgencyRegister'), {
  fallback: <Loading />,
});
