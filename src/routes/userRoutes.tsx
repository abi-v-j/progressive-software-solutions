// src/routes/userRoutes.tsx
import { lazy } from 'react';
import { AppRoute } from '../types';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Courses = lazy(() => import('../pages/Courses'));
const CourseDetail = lazy(() => import('../pages/CourseDetail'));
const Gallery = lazy(() => import('../pages/Gallery'));
const Careers = lazy(() => import('../pages/Careers'));
const Blog = lazy(() => import('../pages/Blog'));
const Contact = lazy(() => import('../pages/Contact'));
const Privacy = lazy(() => import('../pages/Privacy'));
const TermsOfService = lazy(() => import('../pages/TermsOfService'));

export const userRoutes: AppRoute[] = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/courses', element: <Courses /> },
  { path: '/courses/:slug', element: <CourseDetail /> },
  { path: '/gallery', element: <Gallery /> },
  { path: '/careers', element: <Careers /> },
  { path: '/blog', element: <Blog /> },
  { path: '/contact', element: <Contact /> },
  { path: '/privacy', element: <Privacy /> },
  { path: '/termsofservice', element: <TermsOfService /> },
];
