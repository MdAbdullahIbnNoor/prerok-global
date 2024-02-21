import CreatePost from "../CreatePost/CreatePost";
import SinglePostOnFeed from "../ForumLayout/SinglePostOnFeed/SinglePostOnFeed";

const ForumFeed = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto">
      {/**Forum Feed page with pagination. Facebook style */}
      <CreatePost></CreatePost>
      <SinglePostOnFeed></SinglePostOnFeed>
    </div>
  );
};

export default ForumFeed;
