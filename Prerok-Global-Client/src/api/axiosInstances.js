import axios from 'axios'

export const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_SERVERBASEURL,
    withCredentials: true
})

export const axiosPublic = axios.create({
    baseURL: import.meta.env.VITE_SERVERBASEURL,
    withCredentials: true
})

