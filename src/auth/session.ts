// src/auth/session.ts
export const hasValidSession = () => {
  return !!sessionStorage.getItem('admin_session');
};
