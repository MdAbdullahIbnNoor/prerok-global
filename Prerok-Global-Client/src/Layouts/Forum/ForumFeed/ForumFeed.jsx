import { useEffect, useState } from "react";
import CreatePost from "../CreatePost/CreatePost";

import { axiosPublic } from "../../../api/axiosInstances";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt, FaRegShareSquare } from "react-icons/fa";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const ForumFeed = () => {
  const [allForum, setAllForum] = useState([]);
  useEffect(() => {
    axiosPublic("/api/forum/get-all-forum").then((res) => {
      console.log(res.data);
      setAllForum(res.data);
    });
  }, [setAllForum]);
  return (
    <div className=" max-w-screen-2xl mx-auto">
      {/**Forum Feed page with pagination. Facebook style */}
      <CreatePost></CreatePost>
      {/* <SinglePostOnFeed></SinglePostOnFeed>*/}
      {allForum.map((singleForum, id) => (
        <div
          key={id}
          className="border border-[#f5ab35] w-full lg:w-6/12 mx-auto mt-2 mb-4 pt-2 pb-3 shadow-xl p-4 h-[27rem] my-3"
        >
          <Link to={`/forum/${singleForum.id}`}>
            <div className="overflow-hidden h-[23rem]">
              <h4 className="text-xl font-semibold">{singleForum.title}</h4>
              <div className="flex gap-8 border-2 border-blue justify-start py-2">
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
              <button className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-yellow-400">
                <AiOutlineLike /> Like
              </button>
              <button className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-yellow-400">
                <FaRegCommentAlt /> Comment
              </button>
              <button className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-yellow-400">
                <FaRegShareSquare /> Share
              </button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ForumFeed;
