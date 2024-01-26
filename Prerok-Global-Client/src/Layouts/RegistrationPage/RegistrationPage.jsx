import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUpload, FaSpinner } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { imageUpload } from "../../api/imageUpload";
import toast from "react-hot-toast";
import SocialLogin from "../../Components/AuthenticationPage/SocialLogin/SocialLogin";


const RegistrationPage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [errorMessage, setError] = useState("")
    const [loading, setLoading] = useState(false);
    const { registerUser, updateUser } = useAuth();


    const handleSignUp = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = selectedImage;
        const email = form.email.value;
        const password = form.password.value;
        const phone = form.phone.value;
        const country = form.country.value;
        const street = form.street.value;
        setError("")
        if (!name) {
            return setError("Please type your name")
        }
        else if (!selectedImage) {
            return setError("Please upload a image of you")
        }
        else if (!email) {
            return setError("Please type your email")
        }
        else if (!password) {
            return setError("Please input a password")
        }


        const userInfo = { name, image, email, password, phone, country, street }

        try {
            setLoading(true)
            const { data: imageData } = await imageUpload(image);
            const { user: registerInfo } = await registerUser(email, password)
            await updateUser(name, imageData.display_url)
            setLoading(false)
            toast.success("Sign up successful")
            console.log(registerInfo);
        } catch (error) {
            toast.error(error.message);
            setLoading(false)
        }

        console.log(userInfo)
    }


    return (
        <div>
            <div className=" border md:border border-[#f5ab35] w-full lg:w-5/12 mx-auto mt-24 pt-8 shadow-xl">
                <div className="mx-0 md:mx-10">
                    <div className="text-center mb-8">
                        <h4 className="text-xl font-semibold text-[#222222] uppercase">Sign UP</h4>
                        <p className="text-[#b2b2b2]">Sign in to <span className="font-bold">GO</span> for getting all details</p>
                    </div>
                    <hr />
                    <div className="mt-6">
                        <form onSubmit={handleSignUp} className="w-11/12 mx-auto">
                            {/* name  */}
                            <input type="text" name="name" className="border h-11 w-full px-4 py-2 rounded-sm caret-[#f5ab35] focus:border-[#f5ab35]" placeholder="YOUR NAME" id="name" /> <br />
                            {/* image  */}
                            <div>
                                <label className="border block h-11 w-full px-4 py-2 mt-3 rounded-sm caret-[#f5ab35] focus:border-[#f5ab35] cursor-pointer" htmlFor="photoInput"><FaUpload className="inline mr-1 text-lg"></FaUpload> {selectedImage ? selectedImage.name : "Upload Photo"}</label>
                                <input hidden onChange={(e) => setSelectedImage(e.target.files[0])} type="file" name="" id="photoInput" />
                            </div>
                            {/* email  */}
                            <input type="email" name="email" className="border h-11 w-full px-4 py-2 mt-3 rounded-sm caret-[#f5ab35] focus:border-[#f5ab35]" placeholder="YOUR EMAIL" id="email" /> <br />
                            {/* phone  */}
                            <input type="text" name="phone" className="border h-11 w-full px-4 py-2 mt-3 rounded-sm caret-[#f5ab35] focus:border-[#f5ab35]" placeholder="CONTACT NUMBER" id="phone" /> <br />
                            <div className="flex justify-between gap-2">
                                <div>
                                    {/* country  */}
                                    <input type="text" name="country" className="border h-11 w-full px-4 py-2 mt-3 rounded-sm caret-[#f5ab35] focus:border-[#f5ab35]" placeholder="COUNTRY NAME" id="countryName" /> <br />
                                </div>
                                <div>
                                    {/* street  */}
                                    <input type="text" name="street" className="border h-11 w-full px-4 py-2 mt-3 rounded-sm caret-[#f5ab35] focus:border-[#f5ab35]" placeholder="STREET ADDRESS" id="street" /> <br />
                                </div>
                            </div>
                            {/* password  */}
                            <input type="password" name="password" className="border h-11 w-full px-4 py-2 mt-3 rounded-sm caret-[#f5ab35]" placeholder="PASSWORD" id="password" />

                            {/* error message */}
                            <span className="text-red-600">{errorMessage}</span>

                            <button disabled={loading} className="border h-11 w-full px-5 py-2 mt-3 bg-[#f5ab35] text-white font-bold rounded-sm hover:cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#222222] flex items-center justify-center">
                                {
                                    loading ?
                                        <FaSpinner className="animate-spin"></FaSpinner>
                                        :
                                        "SIGN UP"
                                }
                            </button>
                        </form>
                        <p className="text-center text-[#b2b2b2] text-sm mt-3 hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-[#f5ab35]">Having Trouble?</p>
                    </div>
                    <SocialLogin></SocialLogin>
                </div>
                <div className="py-8 bg-[#222222] text-center mt-12">
                    <p className="text-white text-sm font-semibold mb-2">Already have an account?</p>
                    <Link to="/login" className="text-[#33be61] font-semibold underline uppercase hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-[#f5ab35] hover:decoration-wavy">login to existing account</Link>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;