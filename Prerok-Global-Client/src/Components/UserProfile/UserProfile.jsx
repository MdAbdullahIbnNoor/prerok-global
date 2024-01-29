
import { IoMdAlert } from "react-icons/io";
import { Link } from "react-router-dom";


const UserProfile = () => {




    return (
      <div className="w-3/4 mx-auto bg-slate-50 shadow-lg p-4">
        <h1>user profile sections</h1>
  
        <div className="md:flex items-center md:gap-4">
          <h1 className="text-xl font-semibold text-gray-500 drop-shadow-xl ">
            Account Information{" "}
          </h1>
          <div className="flex gap-1">
            <h1>
              <IoMdAlert className="text-red-500" />
            </h1>
            <h2 className="text-sm drop-shadow-xl ">
              This account is created on {`----dynamic value--`}{" "}
            </h2>
          </div>
  
     
        </div>
        <hr className="border-1 border-gray-300 " />
  
          {/* user profile photo  sections  */}
        <div>
          <h1 className="text-gray-500 font-semibold drop-shadow-xl my-3">Change Profile Picture</h1>
          <div className="avatar online">
            <div className="w-24 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
         <div className="mt-5 mb-5">
         <button className="btn bg-green-500 mr-1  text-white btn-sm drop-shadow-xl hover:bg-green-600">Update</button>
         <button className="btn bg-red-500 text-white btn-sm drop-shadow-xl hover:bg-red-600">Cancle</button>
         </div>
         <hr className="border-1 mt-3 border-gray-300 " />
        </div>
  
        {/* Personal Inpormations sections  */}
        <div className="text-gray-500   mt-10">
          <h1 className="text-xl font-semibold text-gray-500">Personal Information</h1>
          <div className="md:flex gap-9 mt-4">
              <div className="flex-[1] space-y-7">
                 <div>
                 <h1 className="text-lg font-semibold"> Name</h1>
                  <p className="border-2 rounded-md px-4 py-2 ">
  
                      {/* input here the dynamic name  */}
                      <span className="py-3">Mr. xyz</span>
                  </p>
                 </div>
  
                 <div>
                 <h1 className="text-lg font-semibold"> Gender </h1>
                  <p className="border-2 rounded-md px-4 py-2 ">
  
                      {/* input here the dynamic value  */}
                      <span className="py-3">Male/ Female</span>
                  </p>
                 </div>
  
                 <div>
                 <h1 className="text-lg font-semibold"> Date OF Birth </h1>
                  <p className="border-2 rounded-md px-4 py-2 ">
  
                      {/* input here the dynamic value  */}
                      <span className="py-3">22/09/2024</span>
                  </p>
                 </div>
  
                 <div>
                 <h1 className="text-lg font-semibold"> Mobile No</h1>
                  <p className="border-2 rounded-md px-4 py-2 ">
  
                      {/* input here the dynamic value  */}
                      <span className="py-3">029320303</span>
                  </p>
                 </div>
                 <div>
                 <h1 className="text-lg font-semibold"> Email </h1>
                  <p className="border-2 rounded-md px-4 py-2 ">
  
                      {/* input here the dynamic value  */}
                      <span className="py-3">xyz.com</span>
                  </p>
                 </div>
                 <div>
                 <h1 className="text-lg font-semibold"> Country </h1>
                  <p className="border-2 rounded-md px-4 py-2 ">
  
                      {/* input here the dynamic value  */}
                      <span className="py-3"> Bangladesh </span>
                  </p>
               </div>
               <div>
                 <h1 className="text-lg font-semibold"> State </h1>
                  <p className="border-2 rounded-md px-4 py-2 ">
  
                      {/* input here the dynamic value  */}
                      <span className="py-3"> Dhaka </span>
                  </p>
               </div>
              </div>
  
              {/* Locations  */}
              <div className="flex-[1] space-y-7">
              <div>
                 <h1 className="text-lg font-semibold"> Post Code </h1>
                  <p className="border-2 rounded-md px-4 py-2 ">
  
                      {/* input here the dynamic value  */}
                      <span className="py-3"> 1200 </span>
                  </p>
               </div>
              
  
              <div>
                 <h1 className="text-lg font-semibold"> Post Code </h1>
                  <p className="border-2 rounded-md px-4 py-2 ">
  
                      {/* input here the dynamic value  */}
                      <span className="py-3"> Dhaka </span>
                  </p>
               </div>
  
              <div>
                 <h1 className="text-lg font-semibold"> Division </h1>
                  <p className="border-2 rounded-md px-4 py-2 ">
  
                      {/* input here the dynamic value  */}
                      <span className="py-3"> Dhaka </span>
                  </p>
               </div>
  
  
              <div>
                 <h1 className="text-lg font-semibold"> District </h1>
                  <p className="border-2 rounded-md px-4 py-2 ">
  
                      {/* input here the dynamic value  */}
                      <span className="py-3"> Savar </span>
                  </p>
               </div>
  
              <div>
                 <h1 className="text-lg font-semibold"> Upazilla </h1>
                  <p className="border-2 rounded-md px-4 py-2 ">
  
                      {/* input here the dynamic value  */}
                      <span className="py-3"> Nobinagor </span>
                  </p>
               </div>
  
              <div>
                 <h1 className="text-lg font-semibold"> Village </h1>
                  <p className="border-2 rounded-md px-4 py-2 ">
  
                      {/* input here the dynamic value  */}
                      <span className="py-3"> Ambagn </span>
                  </p>
               </div>
               <div>
                 <h1 className="text-lg font-semibold"> Road Number & House Number </h1>
                  <p className="border-2 rounded-md px-4 py-2 ">
  
                      {/* input here the dynamic value  */}
                      <span className="py-3"> 5/6 block tha - 66/56 house</span>
                  </p>
               </div>
              
  
              </div>
          </div>
        </div>
  
        <div className=" mt-7 space-y-6 mx-auto">
          <div className="">
            <Link to="/updateProfile">
            <button className="btn w-full bg-green-500 text-white text-lg uppercase hover:bg-green-600 ">Update Info </button>
            </Link>
           
          </div>
          <div className="">
              <button className=" btn w-full bg-red-500 text-white text-lg uppercase  hover:bg-red-600 "> Back </button>
  
          </div>
        </div>
  
  
      </div>
    );
  };
  
  export default UserProfile;
  