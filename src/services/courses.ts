import api from './api'; // or your axios instance

export const CourseService = {
    getAll() {
        return api.get('/courses');
    },

    getById(id: string) {
        return api.get(`/courses/${id}`);
    }
    ,

    create(data: any) {
        return api.post('/courses', data);
    },

    update(id: number, data: any) {
        return api.put(`/courses/${id}`, data);
    },

    remove(id: number) {
        return api.delete(`/courses/${id}`);
    }
};
