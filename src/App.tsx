import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';

import { userRoutes } from './routes/userRoutes';
import { adminRoutes } from './routes/adminRoutes';
import { globalRoutes } from './routes/globalRoutes';

import { PublicLayout } from './layouts/PublicLayout';
import { AdminLayout } from './layouts/AdminLayout';

const router = createHashRouter([
  {
    element: <PublicLayout />,
    children: userRoutes,
  },
  {
    element: <AdminLayout />,
    children: adminRoutes,
  },
  ...globalRoutes,
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
