import { API } from "../API";
import { useOutletContext } from "react-router-dom";

export default function Votes({ post, user, token, fetchPosts }) {
  async function handleUpvotes() {
    const upvote = post.upvotes.find((upvote) => upvote.userId === user.id);

    if (upvote) {
      const res = await fetch(`${API}/votes/upvotes/${post.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchPosts();
    } else {
      const res = await fetch(`${API}/votes/upvotes/${post.id}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchPosts();
    }
  }

  async function handleDownvotes() {
    const downvote = post.downvotes.find(
      (downvote) => downvote.userId === user.id
    );

    if (downvote) {
      const res = await fetch(`${API}/votes/downvotes/${post.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchPosts();
    } else {
      const res = await fetch(`${API}/votes/downvotes/${post.id}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchPosts();
    }
  }
  return (
    <div className="votes-container">
      <div onClick={handleUpvotes}>👍 {post.upvotes.length} </div>{" "}
      <div onClick={handleDownvotes}>👎{post.downvotes.length}</div>
    </div>
  );
}
