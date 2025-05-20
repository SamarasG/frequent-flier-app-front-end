import axios from 'axios';

const API_URL = 'https://your-api-url.com/api'; // Replace with your actual API URL

const api = {
    register: async (email: string, password: string) => {
        const response = await axios.post(`${API_URL}/register`, { email, password });
        return response.data;
    },
    login: async (email: string, password: string) => {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        return response.data;
    },
};

export default api;