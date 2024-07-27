import axios from 'axios';

export const axiosKonfhubInstance = () => {
    const axiosClient = axios.create({
        baseURL: 'https://dev-api.konfhub.com/',
    });

    return axiosClient;
}