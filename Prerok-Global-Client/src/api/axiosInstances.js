import axios from 'axios'

export const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_SERVERBASEURL,
})

export const axiosPublic = axios.create({
    baseURL: import.meta.env.VITE_SERVERBASEURL,
})

