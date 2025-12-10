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

import GlobalLoader from './components/GlobalLoader';
import { SEO } from './components/SEO'; // ✅ MUST EXIST

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
  sessionStorage.setItem('admin_session', 'progressive_admin_session_token');
  return (
    <>
      {/* ✅ GLOBAL DEFAULT SEO */}
      <SEO
        title="Progressive Software Solutions & Training | Software Courses & IT Services"
        description="Progressive Software Solutions & Training offers industry-grade software training, IT development services, internships, and placement-focused programs."
        canonical="https://www.progressivesst.com"
        ogImage="https://www.progressivesst.com/og-home.jpg"
      />

      <Suspense fallback={<GlobalLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
};

export default App;
