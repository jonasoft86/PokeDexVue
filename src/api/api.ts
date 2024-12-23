import axios, { AxiosError } from 'axios';

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    timeout: 5000
})

api.interceptors.response.use(
    response => response,
    (error: AxiosError) => {
        if (error.response) {
            console.error(`Error en la respuesta de la API: ${error.response.status}`, error.response.data);
        } else if (error.request) {
            console.error('No se recibió respuesta de API', error.request);
        } else {
            console.error('Error en la configuración de la solicitud', error.message);
        }
        return Promise.reject(error);
    }
);

export default api;