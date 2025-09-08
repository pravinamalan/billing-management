import { axiosInterface } from "./axiosHelper";

/**
 * Get Api Method
 * @param {*} url
 * @param {*} params
 * @returns
 */
export const getPromise = async (url, params = '') => {
    try {
        return await axiosInterface.get(`${url}${params}`);
    } catch (error) {
        console.error('API error:', error);
        throw error;
    }
};

/**
 * Post Api Method
 * @param {*} url
 * @param {*} params
 * @returns
 */
export const postPromise = async (url, params = '') => {

    try {
        return await axiosInterface.post(url,params);
    } catch (error) {
        console.error('API error:', error);
        throw error;
    }
};
