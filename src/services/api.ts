import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
});

/* ============================
   REQUEST INTERCEPTOR
   - Inject JWT automatically
   ============================ */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('admin_token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // IMPORTANT:
    // Let browser set multipart boundary automatically
    if (config.data instanceof FormData) {
      delete config.headers['Content-Type'];
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/* ============================
   RESPONSE INTERCEPTOR
   - Handle auth errors globally
   ============================ */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token invalid / expired
      localStorage.removeItem('admin_token');
      localStorage.removeItem('admin_user');

      // Force re-login
      window.location.href = '/admin/login';
    }

    return Promise.reject(error);
  }
);

export default api;
