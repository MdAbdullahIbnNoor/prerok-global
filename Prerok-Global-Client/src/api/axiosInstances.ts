import axios from 'axios';

const baseURL = process.env.VITE_SERVERBASEURL;

export const axiosSecure = axios.create({
    baseURL,
    withCredentials: true
});

export const axiosPublic = axios.create({
    baseURL,
    withCredentials: true
});
