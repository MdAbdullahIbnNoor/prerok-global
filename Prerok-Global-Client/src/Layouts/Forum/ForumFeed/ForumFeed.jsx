import { useEffect, useState } from "react";
import CreatePost from "../CreatePost/CreatePost";

import { axiosPublic } from "../../../api/axiosInstances";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt, FaRegShareSquare } from "react-icons/fa";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const ForumFeed = () => {
  const [hasPosted, setHasPosted] = useState(false);
  const [allForum, setAllForum] = useState([]);
  const fetchForumData = () => {
    axiosPublic("/api/forum/get-all-forum").then((res) => {
      // console.log(res.data);
      setAllForum(res.data);
    });
  };
  useEffect(() => {
    fetchForumData();
  }, []);
  if (hasPosted) {
    fetchForumData();
    setHasPosted(false);
  }
  return (
    <div className="wrapper mx-auto">
      {/**Forum Feed page with pagination. Facebook style */}
      <CreatePost setHasPosted={setHasPosted}></CreatePost>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allForum.map((singleForum, _id) => (
          <div
            key={_id}
            className="border w-full border-[#f5ab35] rounded-md mx-auto mt-2 mb-4 pt-2 pb-3 shadow-xl p-4 h-[27rem] my-5"
          >
            <Link to={`/forum/${singleForum._id}`}>
              <div className="overflow-hidden h-[23rem]">
                <h4 className="text-xl font-semibold">{singleForum.title}</h4>
                <div className="flex gap-8 border-blue justify-start py-2">
                  <h6>
                    Posted On:{" "}
                    <span className="font-semibold">
                      {format(
                        new Date(
                          singleForum?.createdAt ||
                          "2024-02-08T14:10:44.361+00:00"
                        ),
                        "MMM dd, yyyy"
                      )}
                    </span>{" "}
                    by <span className="font-semibold">{singleForum.author}</span>
                  </h6>
                </div>
                <hr className="mt-2 mb-3" />
                <p className="text-justify pb-2">
                  {singleForum.content.split(" ").slice(0, 50).join(" ")}
                  {singleForum.content.split(" ").length > 50 ? "..." : ""}
                </p>

                <img
                  src={
                    singleForum?.thumbnail
                      ? singleForum?.thumbnail
                      : "https://i.ibb.co/XpHLjb0/class-thumbnail-10.jpg"
                  }
                  alt=""
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
              <div className="flex gap-4 text-lg font-bold pt-2">
                <button className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-yellow-400 text-sm md:text-lg">
                  <AiOutlineLike /> Like {singleForum?.likes?.length}
                </button>
                <button className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-yellow-400 text-sm md:text-lg">
                  <FaRegCommentAlt /> Comment
                </button>
                <button className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-yellow-400 text-sm md:text-lg">
                  <FaRegShareSquare /> Share
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForumFeed;
