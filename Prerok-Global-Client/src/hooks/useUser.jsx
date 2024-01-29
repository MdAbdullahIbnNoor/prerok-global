import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../api/axiosInstances";

const useUser =  ({email}) => {
    const { refetch, data : users } = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/api/user/get-user/${email}`)
            return res.data
        }
    })
    return { refetch, users}
};

export default useUser;