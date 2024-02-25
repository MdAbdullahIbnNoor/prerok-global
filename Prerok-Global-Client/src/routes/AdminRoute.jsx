/* eslint-disable react/prop-types */


import { Navigate } from "react-router";
import Loading from "../Components/Shared/Loading/Loading";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";

const AdminRoute = ({ children }) => {
    const { loading } = useAuth()
    const { role, roleLoading } = useUser();
    if (loading || roleLoading) {
        return <Loading></Loading>
    }
    if (role === "admin") {
        return children
    }
    else {
        return <Navigate to='/'></Navigate>
    }
};


export default AdminRoute;