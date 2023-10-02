import { Link, useOutletContext, useParams } from "react-router-dom";
import Posts from "./Posts";

export default function SingleSubReddit() {
  const { subredditName } = useParams();
  const { posts, fetchPosts, token, user } = useOutletContext();

  const filteredPosts = posts.filter(
    (post) => post.subreddit.name === subredditName
  );

  return (
    <div>
      {" "}
      {filteredPosts.length === 0 ? (
        <div>
          <p>There is nothing to see here.😲 Be the First to add post!</p>
          <Link to={"/createpost"}>Create Post!</Link>
        </div>
      ) : (
        filteredPosts.map((post) => (
          <Posts
            key={post.id}
            post={post}
            fetchPosts={fetchPosts}
            token={token}
            user={user}
          />
        ))
      )}
    </div>
  );
}
