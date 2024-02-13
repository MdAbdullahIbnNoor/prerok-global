
import { axiosPublic, axiosSecure } from "./axiosInstances"

export const saveUser = async (data) => {
    const { data: response } = await axiosPublic.post('/api/users/add-user', data)
    return response;
}


export const getToken = async (email) => {
    const { data: response } = await axiosSecure.post('/jwt', {email})
    return response;
}

export const removeToken = async () => {
    const { data: response } = await axiosSecure.delete('/clear-cookie')
    return response;
}