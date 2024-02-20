import FeedCreatePost from "../../../Components/ForumComponents/FeedCreatePost/FeedCreatePost";

const ForumFeed = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto">
      {/**Forum Feed page with pagination. Facebook style */}
      <FeedCreatePost></FeedCreatePost>
    </div>
  );
};

export default ForumFeed;
