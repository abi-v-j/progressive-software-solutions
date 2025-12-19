export const hasValidSession = (): boolean => {
  const token = localStorage.getItem('admin_token');
  const user = localStorage.getItem('admin_user');

  return !!token && !!user;
};
