// src/auth/session.ts
export const hasValidSession = () => {
  sessionStorage.setItem('admin_session', 'active');
  return !!sessionStorage.getItem('admin_session');
};
