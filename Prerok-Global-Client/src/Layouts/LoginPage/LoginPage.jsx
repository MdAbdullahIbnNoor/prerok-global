import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import SocialLogin from "../../Components/AuthenticationPage/SocialLogin/SocialLogin";
// import { getToken } from "../../api/usersApi";


const LoginPage = () => {
    const { loginUser, loading } = useAuth();
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // const loginInfo = { email, password };
        try {
            await loginUser(email, password);
            // await getToken(email);
            toast.success("Login sucessfull")
            navigate("/")
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <div>
            <div className="border-t border-l border-r border-[#f5ab35] w-full lg:w-4/12 mx-auto mt-24 pt-8 shadow-xl">
                <div className="mx-0 md:mx-10">
                    <div className="text-center mb-8">
                        <h4 className="text-xl font-semibold text-[#222222] uppercase">Sign In</h4>
                        <p className="text-[#b2b2b2]">Sign in to <span className="font-bold">GO</span> for getting all details</p>
                    </div>
                    <hr />
                    <div className="mt-6">
                        <form onSubmit={handleLogin} className="w-11/12 mx-auto">
                            {/* email  */}
                            <input type="email" name="email" className="border h-11 w-full px-4 py-2 rounded-sm caret-[#f5ab35] focus:border-[#f5ab35]" placeholder="YOUR EMAIL" id="email" /> <br />
                            {/* password  */}
                            <input type="password" name="password" className="border h-11 w-full px-4 py-2 mt-3 rounded-sm caret-[#f5ab35]" placeholder="PASSWORD" id="password" />
                            <button disabled={loading} className="border h-11 w-full px-5 py-2 mt-3 bg-[#f5ab35] text-white font-bold rounded-sm hover:cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#222222] flex items-center justify-center">
                                {
                                    loading ?
                                        <FaSpinner className="animate-spin"></FaSpinner>
                                        :
                                        "SIGN IN NOW"
                                }
                            </button>
                        </form>
                        <p className="text-center text-[#b2b2b2] text-sm mt-3 hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-[#f5ab35]">Forgot Password?</p>
                    </div>
                    <SocialLogin></SocialLogin>
                </div>
                <div className="py-8 bg-[#222222] text-center mt-12">
                    <p className="text-white text-sm font-semibold mb-2">Don’t have an account?</p>
                    <Link to="/registration" className="text-[#33be61] font-semibold underline uppercase hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-[#f5ab35] hover:decoration-wavy">Create a free account</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;