import Post from "./Post";
import classes from "./PostsList.module.css";

const PostsList = () => {
  return (
    <ul className={classes.posts}>
      <Post author="geoffrey" body="Am going to be a good developer" />
      <Post author="Kevin" body="We are going to make it in life" />
    </ul>
  );
};

export default PostsList;
