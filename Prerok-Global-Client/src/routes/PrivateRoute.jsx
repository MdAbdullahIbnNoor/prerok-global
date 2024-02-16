/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import Loading from "../Components/Shared/Loading/Loading";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const loc = useLocation()
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={{ from: loc }} replace={true}></Navigate>
};

export default PrivateRoute;