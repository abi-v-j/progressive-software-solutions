// src/routes/adminRoutes.tsx
import { lazy } from 'react';
import { AppRoute } from '../types';

const Dashboard = lazy(() => import('../admin/Dashboard'));
const Users = lazy(() => import('../admin/Users'));
const Analytics = lazy(() => import('../admin/Analytics'));
const Reports = lazy(() => import('../admin/Reports'));
const Settings = lazy(() => import('../admin/Settings'));
const ManageBlog = lazy(() => import('../admin/ManageBlog'));
const ManageCourses = lazy(() => import('../admin/ManageCourses'));
const ManageGallery = lazy(() => import('../admin/ManageGallery'));
const ManagePosters = lazy(() => import('../admin/ManagePosters'));
const ManageReviews = lazy(() => import('../admin/ManageReviews'));
  const ManageTestimonials = lazy(() => import('../admin/ManageTestimonials'));



export const adminRoutes: AppRoute[] = [
  { path: '/admin/dashboard', element: <Dashboard />, requiresAuth: true },
  { path: '/admin/users', element: <Users />, requiresAuth: true },
  { path: '/admin/analytics', element: <Analytics />, requiresAuth: true },
  { path: '/admin/reports', element: <Reports />, requiresAuth: true },
  { path: '/admin/settings', element: <Settings />, requiresAuth: true },

  // Content Management
  { path: '/admin/blog', element: <ManageBlog />, requiresAuth: true },
  { path: '/admin/courses', element: <ManageCourses />, requiresAuth: true },
  { path: '/admin/gallery', element: <ManageGallery />, requiresAuth: true },
  { path: '/admin/posters', element: <ManagePosters />, requiresAuth: true },
  { path: '/admin/reviews', element: <ManageReviews />, requiresAuth: true },

{ path: '/admin/testimonials', element: <ManageTestimonials />, requiresAuth: true }



];
