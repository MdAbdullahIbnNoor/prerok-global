import { FaGoogle, FaFacebook } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import {  saveUser } from "../../../api/usersApi";
import { useNavigate } from "react-router";

const SocialLogin = () => {
    const { facebookLogin, googleLogin } = useAuth();
    const navigate = useNavigate();
    const handleSocialLogin = async (method) => {
        try {
            const { user: loginInfo } = await method();
            const userInfo = {
                name: loginInfo.displayName,
                image: loginInfo.photoURL,
                email: loginInfo.email,
            };
            const dbResponse = await saveUser(userInfo)
            if (dbResponse.acknowledged || dbResponse.message === "User found") {
                // await getToken(loginInfo.email)
                toast.success("Login successful")
                navigate('/')
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <div className="text-center">
            <h5><span className="text-lg"> Or</span> <br /> continue with</h5>
            <div>
                <button onClick={() => handleSocialLogin(googleLogin)} className="p-1 text-2xl mx-1 mt-1"><FaGoogle></FaGoogle></button>
                {/* <button onClick={() => handleSocialLogin(facebookLogin)} className="p-1 text-2xl mx-1 mt-1"><FaFacebook></FaFacebook></button> */}
            </div>
        </div>
    );
};

export default SocialLogin;