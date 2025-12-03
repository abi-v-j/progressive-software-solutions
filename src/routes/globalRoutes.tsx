import { AppRoute } from '../types';

const NotFound = () => <div className="p-20 text-center">404 — Page Not Found</div>;

export const globalRoutes: AppRoute[] = [
  { path: '*', element: <NotFound /> },
];
