import { IoMdAlert } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../api/axiosInstances";
import Loading from "../Shared/Loading/Loading";
import { AiFillEdit } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";

const UserProfile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const { data: userData, isLoading } = useQuery({
    queryKey: ["usersData", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/user/get-user/${user?.email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(userData);

  const handelBack = () => {
    navigate(-1);
  };

  return (
    <div className="mx-auto overflow-hidden p-4">
      <div className="md:flex gap-10 lg:gap-20">
        <div className="bg-white shadow-lg rounded-2xl md:w-3/3 ">
          <img
            alt="profile"
            src="https://i.ibb.co/b6WNwMk/Teachable-Blog-Linked-In-Banners-3-800x200.jpg"
            className="w-full object-cover mb-4 rounded-t-lg h-48"
          />
          <div className="flex flex-col items-center justify-center p-4 -mt-16">
            <img
              alt="profile"
              src={userData?.image}
              className="mx-auto object-cover rounded-full h-28 w-28  border-2 border-white "
            />

            <p className="p-2 px-4 text-xs text-white bg-green-600 rounded-full">
              {"user"}
            </p>
            <h4 className="mt-2 text-xl font-medium text-gray-800">
              {userData?.name}
            </h4>

            <Link to={`/updateProfile/${userData?.email}`}>
              <button
                data-aos="fade-right"
                className="px-4 text-lg py-1 flex items-center rounded-lg text-white cursor-pointer   mb-1"
              >
                <AiFillEdit className="text-orange-500 font-bold text-3xl" />
              </button>
            </Link>

            <div className="flex gap-1" data-aos="fade-right">
              <h1>
                <IoMdAlert className="text-red-500" />
              </h1>
            </div>
            <div className="w-full p-2 mt-4 rounded-lg ">
              <hr />
              <div className=" md:px-5 text-sm text-gray-600 ">
                <p
                  className="font-bold text-gray-500 text-lg mb-3 drop-shadow-lg"
                  data-aos="fade-right"
                >
                  Personal Information
                </p>
                <div className="space-y-3" data-aos="fade-right">
                  <p className="flex flex-col">
                    Full Name
                    <span className="font-bold text-gray-600k ">
                      {user?.displayName}
                    </span>
                  </p>
                  <p className="flex flex-col">
                    User Email
                    <span className="font-bold text-gray-600 ">
                      {user?.email}
                    </span>
                  </p>
                  <p className="flex flex-col">
                    Phone Number
                    <span className="font-bold text-gray-600 ">
                      {userData?.mobileNumber}
                    </span>
                  </p>
                </div>

                <div className="mt-5">
                  <div className="mt-5 mb-5">
                    <Link to={`/dashboard/update-profile/${user?.email}`}>
                      <button
                        className="btn bg-green-500 mr-1  text-white btn-sm  hover:bg-green-600"
                      >
                        Update
                      </button>
                    </Link>

                    <button
                      onClick={handelBack}
                      className="btn bg-red-500 text-white btn-sm  hover:bg-red-600"
                    >
                      Cancle
                    </button>
                  </div>

                  <div className="flex"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shadow-lg w-full mt-5 rounded-md p-5 lg:px-10">
          <p className="font-bold text-gray-500 text-xl mb-3">
            Others Informations
          </p>
          <div className="space-y-4">
            <div>
              <h1 className="text-lg font-semibold "> Gender </h1>
              <p className=" rounded-md px-4 ">
                {/* input here the dynamic value  */}
                <span className="flex items-center gap-2" data-aos="fade-right">
                  {" "}
                  <MdKeyboardArrowRight className="text-orange-500 text-xl" />{" "}
                  {userData?.gender}
                </span>
              </p>
            </div>

            <div>
              <h1 className="text-lg font-semibold "> Date Of Birth </h1>
              <p className=" rounded-md px-4 ">
                {/* input here the dynamic value  */}
                <span className="flex items-center gap-2" data-aos="fade-right">
                  {" "}
                  <MdKeyboardArrowRight className="text-orange-500 text-xl" />{" "}
                  {userData?.dateOfBirth}
                </span>
              </p>
            </div>

            <div>
              <h1 className="text-lg font-semibold "> Country </h1>
              <p className=" rounded-md px-4 ">
                {/* input here the dynamic value  */}
                <span className="flex items-center gap-2" data-aos="fade-right">
                  {" "}
                  <MdKeyboardArrowRight className="text-orange-500 text-xl" />{" "}
                  {userData?.country}
                </span>
              </p>
            </div>

            <div>
              <h1 className="text-lg font-semibold "> State </h1>
              <p className=" rounded-md px-4 ">
                {/* input here the dynamic value  */}
                <span className="flex items-center gap-2" data-aos="fade-right">
                  {" "}
                  <MdKeyboardArrowRight className="text-orange-500 text-xl" />{" "}
                  {userData?.state}
                </span>
              </p>
            </div>

            <div>
              <h1 className="text-lg font-semibold "> Post Code </h1>
              <p className=" rounded-md px-4 ">
                {/* input here the dynamic value  */}
                <span className="flex items-center gap-2" data-aos="fade-right">
                  {" "}
                  <MdKeyboardArrowRight className="text-orange-500 text-xl" />{" "}
                  {userData?.postcode}
                </span>
              </p>
            </div>

            <div>
              <h1 className="text-lg font-semibold "> Division </h1>
              <p className=" rounded-md px-4 ">
                {/* input here the dynamic value  */}
                <span className="flex items-center gap-2" data-aos="fade-right">
                  {" "}
                  <MdKeyboardArrowRight className="text-orange-500 text-xl" />{" "}
                  {userData?.division}
                </span>
              </p>
            </div>
            <div>
              <h1 className="text-lg font-semibold "> District </h1>
              <p className=" rounded-md px-4 ">
                {/* input here the dynamic value  */}
                <span className="flex items-center gap-2" data-aos="fade-right">
                  {" "}
                  <MdKeyboardArrowRight className="text-orange-500 text-xl" />{" "}
                  {userData?.district}
                </span>
              </p>
            </div>
            <div>
              <h1 className="text-lg font-semibold "> Upazilla </h1>
              <p className=" rounded-md px-4 ">
                {/* input here the dynamic value  */}
                <span className="flex items-center gap-2" data-aos="fade-right">
                  {" "}
                  <MdKeyboardArrowRight className="text-orange-500 text-xl" />{" "}
                  {userData?.upazilla}
                </span>
              </p>
            </div>
            <div>
              <h1 className="text-lg font-semibold "> Village </h1>
              <p className=" rounded-md px-4 ">
                {/* input here the dynamic value  */}
                <span className="flex items-center gap-2" data-aos="fade-right">
                  {" "}
                  <MdKeyboardArrowRight className="text-orange-500 text-xl" />{" "}
                  {userData?.village}
                </span>
              </p>
            </div>
            <div>
              <h1 className="text-lg font-semibold "> House & Road NO </h1>
              <p className=" rounded-md px-4 ">
                {/* input here the dynamic value  */}
                <span className="flex items-center gap-2" data-aos="fade-right">
                  {" "}
                  <MdKeyboardArrowRight className="text-orange-500 text-xl" />{" "}
                  {userData?.roadNumber}
                </span>
              </p>
            </div>
          </div>
          <div className="blocl text-center">
            <Link to={`/dashboard/update-profile/${user?.email}`}>
              <button
                className="btn bg-green-500 mr-1 px-10 text-white btn-sm hover:bg-green-600"
              >
                Add Info
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
