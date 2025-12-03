// src/routes/adminRoutes.tsx
import { lazy } from 'react';
import { AppRoute } from '../types';

const Dashboard = lazy(() => import('../admin/Dashboard'));
const Applications = lazy(() => import('../admin/Applications'));
const ManageBlog = lazy(() => import('../admin/ManageBlog'));
const ManageCourses = lazy(() => import('../admin/ManageCourses'));

export const adminRoutes: AppRoute[] = [
  { path: '/admin/dashboard', element: <Dashboard />, requiresAuth: true },
  { path: '/admin/applications', element: <Applications />, requiresAuth: true },
  { path: '/admin/blog', element: <ManageBlog />, requiresAuth: true },
  { path: '/admin/courses', element: <ManageCourses />, requiresAuth: true },
];
