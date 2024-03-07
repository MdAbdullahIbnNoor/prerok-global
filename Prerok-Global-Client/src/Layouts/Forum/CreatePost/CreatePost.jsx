import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { axiosPublic } from "../../../api/axiosInstances";
import useAuth from "../../../hooks/useAuth";

const CreatePost = ({ setHasPosted }) => {
  const { user } = useAuth();
  const handleCreatePost = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const title = formdata.get("title");
    const thumbnail = formdata.get("thumbnail");
    const content = formdata.get("content");
    const postData = {
      title: title,
      thumbnail: thumbnail,
      content: content,
      author: user.displayName,
    };
    e.currentTarget.reset();
    axiosPublic
      .post("/api/forum/create-forum-post", postData)
      .then(() => {
        // console.log(res.data);
        setHasPosted(true);
        toast.success("Your post has been published");
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });
  };

  return (
    <div>
      <div>
        <div className="border border-[#f5ab35] w-full rounded-md lg:w-6/12 mx-auto mt-2 mb-4 pt-2 pb-3 shadow-xl">
          <div className="mx-0 md:mx-10 my-6">
            <div className="text-center mb-2">
              <h4 className="text-lg font-semibold text-[#080808] uppercase">
                Create A Post
              </h4>
            </div>
            <hr />
            <div className="mt-2">
              <form className="w-11/12 mx-auto" onSubmit={handleCreatePost}>
                {/* title  */}
                <input
                  type="text"
                  name="title"
                  className="border h-11 w-full px-4 py-2 rounded-sm outline-none caret-[#f5ab35] focus:border-[#f5ab35]"
                  placeholder="ENTER TITLE"
                  id="title"
                />{" "}
                <br />
                {/* Photo  */}
                <input
                  type="text"
                  name="thumbnail"
                  className="border h-11 w-full px-4 py-2 mt-3 rounded-sm outline-none caret-[#f5ab35] focus:border-[#f5ab35]"
                  placeholder="IMAGE LINK"
                  id="photo"
                />{" "}
                <br />
                <textarea
                  type="text"
                  name="content"
                  rows="4"
                  cols="50"
                  className="border w-full px-4 py-2 mt-3 rounded-sm outline-none caret-[#f5ab35] focus:border-[#f5ab35] resize-none"
                  placeholder="What's on your mind ..."
                  id="body"
                />
                <button className="border h-11 w-full px-5 py-2 mt-3 bg-[#f5ab35] text-white font-bold rounded-sm outline-none hover:cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#222222] flex items-center justify-center">
                  POST
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
CreatePost.propTypes = {
  setHasPosted: PropTypes.func.isRequired,
};

export default CreatePost;
