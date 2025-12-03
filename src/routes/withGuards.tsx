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

    // ✅ INDEX ROUTE — NO PATH, NO CHILDREN (V7 RULE)
    if (route.index === true) {
      return {
        index: true,
        element: guardedElement,
      };
    }

    // ✅ NORMAL ROUTE — PATH ALLOWED, CHILDREN ALLOWED
    return {
      path: route.path,
      element: guardedElement,
      children: route.children?.map(applyGuards),
    };
  };

  return routes.map(applyGuards);
};
