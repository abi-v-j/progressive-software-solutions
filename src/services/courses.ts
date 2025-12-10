import axios, { AxiosResponse } from 'axios';
import { Course } from '../types';

export interface UploadResponse {
    data: string[];
}

const BASE_URL = '/api/v1/courses';

export const CourseService = {
    getAll(): Promise<AxiosResponse<{ data: Course[] }>> {
        return axios.get(BASE_URL);
    },

    getById(id: string | number): Promise<AxiosResponse<{ data: Course }>> {
        return axios.get(`${BASE_URL}/${id}`);
    },

    create(data: any): Promise<AxiosResponse<{ data: Course }>> {
        return axios.post(BASE_URL, data);
    },

    update(id: number, data: any): Promise<AxiosResponse<{ data: Course }>> {
        return axios.put(`${BASE_URL}/${id}`, data);
    },

    remove(id: number): Promise<AxiosResponse<void>> {
        return axios.delete(`${BASE_URL}/${id}`);
    },

    // ✅ THIS WAS MISSING — THIS FIXES YOUR ERROR
    uploadImages(files: FileList | File[]): Promise<AxiosResponse<UploadResponse>> {
        const formData = new FormData();

        // ✅ FORCE CORRECT TYPE
        const fileArray: File[] =
            files instanceof FileList ? Array.from(files) : files;

        fileArray.forEach((file: File) => {
            formData.append('images', file, file.name);
        });

        return axios.post(`${BASE_URL}/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

};
