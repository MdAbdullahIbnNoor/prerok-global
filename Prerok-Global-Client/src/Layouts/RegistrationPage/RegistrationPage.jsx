import { Link } from "react-router-dom";


const RegistrationPage = () => {

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;
        const phone = form.phone.value;
        const country = form.country.value;
        const street = form.street.value;
        
        const userInfo = {name, image, email, password, phone, country, street}

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
                        <input type="text" name="name" className="border h-11 w-full px-4 py-2 rounded-sm caret-[#f5ab35] focus:border-[#f5ab35]" placeholder="YOUR NAME" id="" /> <br />
                        {/* image  */}
                        <input type="text" name="image" className="border h-11 w-full px-4 py-2 mt-3 rounded-sm caret-[#f5ab35] focus:border-[#f5ab35]" placeholder="IMAGE URL" id="" /> <br />
                        {/* email  */}
                        <input type="email" name="email" className="border h-11 w-full px-4 py-2 mt-3 rounded-sm caret-[#f5ab35] focus:border-[#f5ab35]" placeholder="YOUR EMAIL" id="" /> <br />
                        {/* phone  */}
                        <input type="text" name="phone" className="border h-11 w-full px-4 py-2 mt-3 rounded-sm caret-[#f5ab35] focus:border-[#f5ab35]" placeholder="CONTACT NUMBER" id="" /> <br />
                            <div className="flex justify-between gap-2">
                                <div>
                        {/* country  */}
                                <input type="text" name="country" className="border h-11 w-full px-4 py-2 mt-3 rounded-sm caret-[#f5ab35] focus:border-[#f5ab35]" placeholder="COUNTRY NAME" id="" /> <br />
                                </div>
                                <div>
                        {/* street  */}
                                <input type="text" name="street" className="border h-11 w-full px-4 py-2 mt-3 rounded-sm caret-[#f5ab35] focus:border-[#f5ab35]" placeholder="STREET ADDRESS" id="" /> <br />
                                </div>
                            </div>
                        {/* password  */}
                        <input type="password" name="password" className="border h-11 w-full px-4 py-2 mt-3 rounded-sm caret-[#f5ab35]" placeholder="PASSWORD" id="" />
                        <input type="submit" className="border h-11 w-full px-5 py-2 mt-3 bg-[#f5ab35] text-white font-bold rounded-sm hover:cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#222222]" value="SIGN UP" />
                    </form>
                    <p className="text-center text-[#b2b2b2] text-sm mt-3 hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-[#f5ab35]">Having Trouble?</p>
                </div>
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