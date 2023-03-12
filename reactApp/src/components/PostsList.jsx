import Post from "./components/Post";

const PostsList = () => {
  return (
    <li>
      <Post author="geoffrey" body="Am going to be a good developer" />
      <Post author="Kevin" body="We are going to make it in life" />
    </li>
  );
};

export default PostsList;
