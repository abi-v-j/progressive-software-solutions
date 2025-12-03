// src/routes/authRoutes.tsx
import { lazy } from 'react';
import { AppRoute } from '../types';

const Login = lazy(() => import('../admin/Login'));

export const authRoutes: AppRoute[] = [
  { path: '/admin', element: <Login /> },
];
