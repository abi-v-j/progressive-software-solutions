import { AxiosResponse } from 'axios';
import api from './api';
import { Admin, LoginResponse } from '../types';

const BASE_URL = '/auth';

export const AuthService = {

  login(
    email: string,
    password: string
  ): Promise<AxiosResponse<{ data: LoginResponse }>> {
    return api.post(`${BASE_URL}/login`, {
      email,
      password
    });
  },

  logout(): void {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
  },

  saveSession(data: LoginResponse): void {
    localStorage.setItem('admin_token', data.token);
    localStorage.setItem('admin_user', JSON.stringify(data.admin));
  },

  getCurrentAdmin(): Admin | null {
    const admin = localStorage.getItem('admin_user');
    return admin ? JSON.parse(admin) : null;
  }
};
