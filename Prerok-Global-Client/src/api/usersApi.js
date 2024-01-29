import { axiosPublic } from "./axiosInstances"

export const saveUser = async (data) => {
    const {data: response} = await axiosPublic.post('/api/users/add-user', data)
    return response;
}