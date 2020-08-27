import React from 'react';
import { Loading } from 'Components';
import loadable from '../utils/loadable';

// Landing Page
export const Landing = loadable(() =>
  import('./Landing'), {
  fallback: <Loading />,
});

// Pages
export const Login = loadable(() =>
  import('./Pages/Login'), {
  fallback: <Loading />,
});
export const AgencyRegistration = loadable(() =>
  import('./Pages/AgencyRegistration'), {
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