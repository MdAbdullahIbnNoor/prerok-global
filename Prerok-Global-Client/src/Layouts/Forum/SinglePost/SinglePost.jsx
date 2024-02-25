import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt, FaRegShareSquare } from "react-icons/fa";
import CommentComponent from "./CommentComponent/CommentComponent";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { axiosPublic } from "../../../api/axiosInstances";
import { format } from "date-fns";

const SinglePost = () => {
  const { id: postId } = useParams();
  const [postData, setPostData] = useState(null);
  console.log(postId);
  useEffect(() => {
    axiosPublic.get(`api/forum/get-forum/${postId}`).then((res) => {
      console.log(res.data);
      setPostData(res.data);
    });
  }, [postId, setPostData]);
  return (
    <div className="border border-[#f5ab35] w-full lg:w-6/12 mx-auto mt-2 mb-4 pt-2 pb-3 shadow-xl p-4 h-full my-3">
      <div className="overflow-hidden h-full">
        <h4 className="text-xl font-semibold">{postData?.title}</h4>
        <div className="flex gap-8 border-2 border-blue justify-start py-2">
          <h6>
            Posted On:{" "}
            <span className="font-semibold">
              {format(
                new Date(
                  postData?.createdAt || "2024-02-08T14:10:44.361+00:00"
                ),
                "MMM dd, yyyy"
              )}
            </span>{" "}
            by <span className="font-semibold">{postData?.author}</span>
          </h6>
        </div>
        <p className="text-justify pb-2">{postData?.content}</p>
        <img
          src={
            postData?.thumbnail
              ? postData?.thumbnail
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
      <div className="">Comments</div>
      <CommentComponent></CommentComponent>
    </div>
  );
};

export default SinglePost;
