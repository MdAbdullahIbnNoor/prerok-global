import { FaGoogle, FaFacebook } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const SocialLogin = () => {
    const { facebookLogin, googleLogin } = useAuth();
    const handleSocialLogin = async (method) => {
        try {
            const loginInfo = await method();
            console.log(loginInfo);
            toast.success("Login Sucessfull")
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <div className="text-center">
            <h5><span className="text-lg"> Or</span> <br /> continue with</h5>
            <div>
                <button onClick={() => handleSocialLogin(googleLogin)} className="p-1 text-2xl mx-1 mt-1"><FaGoogle></FaGoogle></button>
                <button onClick={() => handleSocialLogin(facebookLogin)} className="p-1 text-2xl mx-1 mt-1"><FaFacebook></FaFacebook></button>
            </div>
        </div>
    );
};

export default SocialLogin;