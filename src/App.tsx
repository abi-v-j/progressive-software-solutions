import { Suspense } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import { withGuards } from './routes/withGuards';

import { userRoutes } from './routes/userRoutes';
import { adminRoutes } from './routes/adminRoutes';
import { authRoutes } from './routes/authRoutes';
import { globalRoutes } from './routes/globalRoutes';

import { PublicLayout } from './layouts/PublicLayout';
import { AdminLayout } from './layouts/AdminLayout';
import { AuthLayout } from './layouts/AuthLayout';

const router = createHashRouter([
  {
    element: <PublicLayout />,
    children: withGuards(userRoutes),
  },
  {
    element: <AuthLayout />,
    children: withGuards(authRoutes),
  },
  {
    element: <AdminLayout />,
    children: withGuards(adminRoutes),
  },
  ...withGuards(globalRoutes),
]);

const App = () => {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
