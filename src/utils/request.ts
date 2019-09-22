import axios from 'axios';
import { Message } from 'element-ui';

const myAxios = axios.create({
    baseURL: process.env.VUE_APP_PUBLIC_URL,
    timeout: 6000,
});

myAxios.interceptors.request.use((config) => {
    const newConfig = {
        ...config,
        headers: {
            ...config.headers,
        },
    };
    return newConfig;
});

myAxios.interceptors.response.use((res) => {
    const { data: {code, message, result} } = res;
    if (code !== 0) {
        Message({
            message: message,
            type: 'error',
            duration: 5 * 1000,
        })
    } else {
        return result;
    }
}, (err) => {
    Message({
        message: err.message,
        type: 'error',
        duration: 5 * 1000,
    });
});

export default myAxios;
