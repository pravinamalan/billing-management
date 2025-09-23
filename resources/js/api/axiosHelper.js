import axios from "axios";
import { getAccessToken } from "./tokenManager";


const instance = axios.create({
    baseURL : `${window.location.origin}`,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json'
    },
});

instance.interceptors.request.use(
    (config) =>{
        const token = getAccessToken();

        if(token){
            config.headers.Authorization = `Bearer ${token}`;

        }
        return config;
    },
    (error) => Promise.reject(error)
)
const handleApiError = (error) => {

    if(error.response){
        console.error(`Api error: ${error.response.status} - ${error.response.data}`);
    } else if (error.request) {
        console.error('API Error: No response');
    } else {
        console.error('API Error:', error.message);
    }

}

export const axiosInterface = {

    instance :instance,

    get: async (url, params ={}, config={}) =>{
        try {
            const response = await instance.get(url, {params, ...config})
            return response.data;
        } catch (error) {
            handleApiError(error);
            throw error;
        }
    },
    post: async (url, data = {}, config = {}) => {
        
        try {
            const response = await instance.post(url, data, config);
            return response.data;
        } catch (error) {
            handleApiError(error);
            throw error;
        }
    },
       put: async (url, data = {}, config = {}) => {
        try {
            const response = await instance.put(url, data, config);
            return response.data;
        } catch (error) {
            handleApiError(error);
            throw error;
        }
    },

    patch: async (url, data = {}, config = {}) => {
        try {
            const response = await instance.patch(url, data, config);
            return response.data;
        } catch (error) {
            handleApiError(error);
            throw error;
        }
    },

    delete: async (url, config = {}) => {
        try {
            const response = await instance.delete(url, config);
            return response.data;
        } catch (error) {
            handleApiError(error);
            throw error;
        }
    },
}
