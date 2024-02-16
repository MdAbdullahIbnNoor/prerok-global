import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../api/axiosInstances";
import useAuth from "./useAuth";

const useUser = () => {
    const { user: currentUser, loading } = useAuth();
    const { data: user, refetch, isLoading: roleLoading } = useQuery({
        queryKey: ["my-profile", currentUser?.email], enabled: !loading, queryFn: async () => {
            const res = await axiosSecure.get(`/api/users/get-user/${currentUser?.email}`)
            return res.data
        }
    })
    return { user, role: user?.role, refetch, roleLoading }
};

export default useUser;