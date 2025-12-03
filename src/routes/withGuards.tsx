// src/routes/withGuards.tsx
import { Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import type { AppRoute } from '../types';
import { hasValidSession } from '../auth/session';

export const withGuards = (routes: AppRoute[]): RouteObject[] => {
  const applyGuards = (route: AppRoute): RouteObject => {
    const guardedElement = route.requiresAuth
      ? hasValidSession()
        ? route.element
        : <Navigate to="/admin" replace />
      : route.element;

    return {
      ...route,
      element: guardedElement,
      children: route.children?.map(applyGuards),
    };
  };

  return routes.map(applyGuards);
};
