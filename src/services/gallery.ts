import axios from 'axios';
import { GalleryItem } from '../types';

const BASE = '/api/v1/gallery';

export const GalleryService = {
  getAll() {
    return axios.get<{ data: GalleryItem[] }>(BASE);
  },

  create(data: Omit<GalleryItem, 'id'>) {
    return axios.post(BASE, data);
  },

  update(id: number, data: Partial<Omit<GalleryItem, 'id'>>) {
    return axios.put(`${BASE}/${id}`, data);
  },

  remove(id: number) {
    return axios.delete(`${BASE}/${id}`);
  },

  uploadImages(files: FileList) {
    const fd = new FormData();
    Array.from(files).forEach(file => fd.append('images', file));
    return axios.post<{ data: string[] }>(`${BASE}/upload`, fd);
  }
};
