import { axiosPublic, axiosSecure } from "./axiosInstances";

interface UserData {
    username: string;
    email: string;
    password: string;
}

export const saveUser = async (data: UserData): Promise<any> => {
    try {
        const { data: response } = await axiosPublic.post('/api/users/add-user', data);
        return response;
    } catch (error: any) {
        throw new Error(`Failed to save user: ${(error as Error).message}`);
    }
}

export const getToken = async (email: string): Promise<any> => {
    try {
        const { data: response } = await axiosSecure.post('/jwt', { email });
        return response;
    } catch (error: any) {
        throw new Error(`Failed to get token: ${(error as Error).message}`);
    }
}

export const removeToken = async (): Promise<any> => {
    try {
        const { data: response } = await axiosSecure.delete('/clear-cookie');
        return response;
    } catch (error: any) {
        throw new Error(`Failed to remove token: ${(error as Error).message}`);
    }
}
