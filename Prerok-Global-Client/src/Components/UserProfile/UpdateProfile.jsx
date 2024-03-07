import { useForm } from "react-hook-form";
import { axiosPublic, axiosSecure } from "../../api/axiosInstances";
import { useQuery } from "@tanstack/react-query";
import { imageUpload } from "../../api/imageUpload";
import Loading from "../Shared/Loading/Loading";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  useEffect(() => {
    document.title = "Update Profile | PrerokGlobal";
  }, []);
  const { email } = useParams();
  const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState("");
  const [manualLoading, setManualLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const navigate = useNavigate();

  // user data
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["usersData", email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/api/users/get-user/${email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  // image upload handler
  const handleImageChange = async (imageData) => {
    try {
      setManualLoading(true);
      const { data: imageFile } = await imageUpload(imageData);
      setImageURL(imageFile.display_url);
      setManualLoading(false);
    } catch (error) {
      toast.error(error.message);
      setManualLoading(false);
    }
  };

  // update info handler
  const onSubmit = async (data) => {
    try {
      setUpdateLoading(true);
      const userData = {
        name: data?.name,
        dateOfBirth: data?.dateOfBirth,
        district: data?.district,
        division: data?.division,
        email: data?.email,
        gender: data?.gender,
        image: imageURL || users.image,
        postcode: data?.postcode,
        country: data?.country,
        mobileNumber: data?.mobileNumber,
        roadNumber: data?.roadNumber,
        state: data?.state,
        upazilla: data?.upazilla,
        village: data?.village,
      };
      const { data: response } = await axiosSecure.put(
        `/api/users/update-user/${email}`,
        userData  
      );
      if (response.modifiedCount > 0) {
        toast.success("User Updated");
        refetch();
        navigate("/dashboard/profile");
        setUpdateLoading(false);
      }
      setUpdateLoading(false);
    } catch (error) {
      toast.error(error.message);
      setUpdateLoading(false);
    }
  };

  const handelBack = () => {
    navigate(-1);
  };

  return (
    <div className="p-4 mx-auto overflow-hidden rounded-md shadow-md ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="text-center md:my-5 font-semibold text-gray-400">
          Update Your Profile
        </p>
        {/* avatar  */}
        <div data-aos="fade-down">
          <div className="w-3/4 flex justify-center items-center mx-auto">
            <div className="avatar online">
              <div className="w-24 rounded-full">
                <img
                  src={
                    users?.image ||
                    "https://i.ibb.co/nzvNdjs/corporate-user-icon.png"
                  }
                />
              </div>
            </div>
          </div>
          <div className=" p-4 bg-white w-full  m-auto rounded-lg">
            <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
              <div className="flex flex-col w-max mx-auto text-center">
                <label>
                  <input
                    onChange={(e) => handleImageChange(e.target.files[0])}
                    type="file"
                    accept="image/*"
                    className="file-input file-input-bordered file-input-warning file-input-xs w-full max-w-xs"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* main container  */}
        <div  className="p-4 flex gap-5 flex-col md:flex-row ">
          {/* section 1  */}
          <div className="w-full space-y-4 " data-aos="fade-right">
            {/* name field  */}
            <label
              className="form-control w-full md:md:my-5"
            >
              <div className="label">
                <span className="label-text text-gray-500"> User Name </span>
              </div>
              <input
                {...register("name")}
                defaultValue={users?.name}
                type="text"
                placeholder="Name"
                className="input input-sm  input-bordered input-warning w-full "
              />
            </label>

            {/* email field  */}
            <label
              className="form-control w-full  md:md:my-5"
            >
              <div className="label">
                <span className="label-text text-gray-500">Email </span>
              </div>
              <input
                {...register("email")}
                defaultValue={users?.email}
                type="email"
                placeholder="Email"
                className="input input-sm  input-bordered input-warning w-full"
              />
            </label>

            {/* mobile  */}
            <label
              className="form-control w-full md:my-5"
            >
              <div className="label">
                <span className="label-text text-gray-500">Mobile </span>
              </div>
              <input
                {...register("mobileNumber")}
                defaultValue={users?.mobileNumber}
                type="number"
                placeholder="Phone"
                className="input input-sm  input-bordered input-warning w-full"
              />
            </label>

            {/* select gender  */}
            <div >
              <div className="label">
                <span className="label-text text-gray-500">Gender </span>
              </div>
              <select
                {...register("gender")}
                defaultValue={users?.gender}
                className="select select-sm  select-warning w-full "
              >
                <option disabled selected>
                  Select Gender{" "}
                </option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* date of birth  */}
            <label
              className="form-control w-full md:my-5"
            >
              <div className="label">
                <span className="label-text text-gray-500">Date OF Birth </span>
              </div>
              <input
                {...register("dateOfBirth")}
                defaultValue={users?.dateOfBirth}
                type="date"
                placeholder="Date Of Birth"
                className="input input-sm  input-bordered input-warning w-full"
              />
            </label>

            {/* Country  */}
            <label
              className="form-control w-full md:my-5"
            >
              <div className="label">
                <span className="label-text text-gray-500">Country </span>
              </div>
              <input
                {...register("country")}
                defaultValue={users?.country}
                type="text"
                placeholder="Country"
                className="input input-sm  input-bordered input-warning w-full"
              />
            </label>
          </div>

          {/* section 2  */}
          <div className="w-full space-y-4" data-aos="fade-left">
            {/* state  */}
            <label className="form-control w-full md:my-5" >
              <div className="label">
                <span className="label-text text-gray-500">State </span>
              </div>
              <input
                {...register("state")}
                defaultValue={users?.state}
                type="text"
                placeholder="State"
                className="input input-sm  input-bordered input-warning w-full"
              />
            </label>

            {/* post code  */}
            <label className="form-control w-full md:my-5" >
              <div className="label">
                <span className="label-text text-gray-500">Post Code </span>
              </div>
              <input
                {...register("postcode")}
                defaultValue={users?.postcode}
                type="number"
                placeholder="Post Code"
                className="input input-sm  input-bordered input-warning w-full"
              />
            </label>

            {/* Division */}
            <label className="form-control w-full md:my-5" >
              <div className="label">
                <span className="label-text text-gray-500">Division </span>
              </div>
              <input
                {...register("division")}
                defaultValue={users?.division}
                type="text"
                placeholder="Division"
                className="input input-sm  input-bordered input-warning w-full"
              />
            </label>

            {/* District     */}
            <label className="form-control w-full md:my-5" >
              <div className="label">
                <span className="label-text text-gray-500">District </span>
              </div>
              <input
                {...register("district")}
                defaultValue={users?.district}
                type="text"
                placeholder="District"
                className="input input-sm  input-bordered input-warning w-full"
              />
            </label>

            {/* Upazilla     */}
            <label className="form-control w-full md:my-5" >
              <div className="label">
                <span className="label-text text-gray-500">Upazilla </span>
              </div>
              <input
                {...register("upazilla")}
                defaultValue={users?.upazilla}
                type="text"
                placeholder="Upazilla"
                className="input input-sm  input-bordered input-warning w-full"
              />
            </label>

            {/* Village     */}
            <label className="form-control w-full md:my-5" >
              <div className="label">
                <span className="label-text text-gray-500">Village </span>
              </div>
              <input
                {...register("village")}
                defaultValue={users?.village}
                type="text"
                placeholder="Village"
                className="input input-sm  input-bordered input-warning w-full"
              />
            </label>
          </div>
        </div>

        {/* Road Number & House Number     */}
        <label className="form-control px-4 w-full " >
          <div className="label">
            <span className="label-text text-gray-500">
              Road Number & House Number{" "}
            </span>
          </div>
          <input
            {...register("roadNumber")}
            defaultValue={users?.roadNumber}
            type="text"
            placeholder="Road No & House No"
            className="input input-bordered input-warning input-sm w-full"
          />
        </label>

        <div className="flex justify-center mt-4 md:my-5 gap-4">
          <button
            className="btn bg-[#f5ab35] text-white btn-sm drop-shadow-xl hover:bg-[#df9826] "
            disabled={manualLoading || isLoading || updateLoading}
          >
            {" "}
            {manualLoading
              ? "Wait! image is uploading..."
              : updateLoading
              ? "Updating..."
              : "Update & Save"}
          </button>

          <button
            onClick={handelBack}
            className="btn bg-red-500 text-white btn-sm drop-shadow-xl hover:bg-red-600"
          >
            Cancle
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
