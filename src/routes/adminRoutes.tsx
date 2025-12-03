import { AppRoute } from '../types';

import { Login } from '../admin/Login';
import { Dashboard } from '../admin/Dashboard';
import { Applications } from '../admin/Applications';
import { ManageBlog } from '../admin/ManageBlog';
import { ManageCourses } from '../admin/ManageCourses';

export const adminRoutes: AppRoute[] = [
  { path: '/admin', element: <Login /> },
  { path: '/admin/dashboard', element: <Dashboard /> },
  { path: '/admin/applications', element: <Applications /> },
  { path: '/admin/blog', element: <ManageBlog /> },
  { path: '/admin/courses', element: <ManageCourses /> },
];
