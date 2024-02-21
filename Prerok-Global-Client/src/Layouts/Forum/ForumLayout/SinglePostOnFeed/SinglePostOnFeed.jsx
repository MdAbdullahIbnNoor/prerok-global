import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt, FaRegShareSquare } from "react-icons/fa";

const SinglePostOnFeed = () => {
  return (
    <div className="border border-[#f5ab35] w-full lg:w-6/12 mx-auto mt-2 mb-4 pt-2 pb-3 shadow-xl p-4 h-[27rem] my-3">
      <div className="overflow-hidden h-[23rem]">
        <h4 className="text-xl font-semibold">
          Title Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </h4>
        <div className="flex gap-8 border-2 border-blue justify-start py-2">
          <h6>
            Posted On:{" "}
            <span className="font-semibold">28 Jan, 2024 - 12:20 AM</span> by{" "}
            <span className="font-semibold">Poster Name</span>
          </h6>
        </div>
        <p className="text-justify pb-2">
          Post content goes here Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Nulla rerum quisquam iste molestias commodi eaque
          laboriosam placeat voluptates necessitatibus soluta rem quia
          asperiores unde, amet maxime cupiditate aut sed? Veritatis architecto
          necessitatibus minus odio earum amet nobis harum facilis distinctio?
        </p>
        <img
          src="https://i.ibb.co/XpHLjb0/class-thumbnail-10.jpg"
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
    </div>
  );
};

export default SinglePostOnFeed;
