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
export const ForgetPassword = loadable(() =>
  import('./Pages/ForgetPassword'), {
  fallback: <Loading />,
});
export const ChangePassword = loadable(() =>
  import('./Pages/ChangePassword'), {
  fallback: <Loading />,
});
