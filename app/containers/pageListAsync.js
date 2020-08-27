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

// Page Forgot Password
export const ForgetPassword = loadable(() =>
  import('./Page/ForgotPassword/ForgetPassword'), {
  fallback: <Loading />,
});

// Page Change Password
export const ChangePassword = loadable(() =>
  import('./Page/ForgotPassword/ChangePassword'), {
  fallback: <Loading />,
});