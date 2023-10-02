import Votes from "./Votes";
import { API } from "../API";
import EditPosts from "./EditPosts";
import { useEffect, useState } from "react";

export default function Posts({ post, token, fetchPosts, user }) {
  const [isEditing, setIsEditing] = useState(false);
  const canDelete = user && user.id === post.userId;

  async function deletespost(e) {
    e.preventDefault();
    const res = await fetch(`${API}/posts/${post.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const info = await res.json();
    console.log(info);

    fetchPosts();
  }

  return (
    <div className="individual-post">
      <Votes post={post} user={user} token={token} fetchPosts={fetchPosts} />
      <div className="post-content">
        {!isEditing ? (
          <div>
            <div>Subreddit: {post.subreddit.name}</div>
            <div>Title: {post.title}</div>
            <div>{post.text}</div>
            {canDelete && (
              <div>
                <button onClick={deletespost}>Delete</button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsEditing(true);
                  }}
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        ) : (
          <EditPosts
            setIsEditing={setIsEditing}
            post={post}
            fetchPosts={fetchPosts}
            token={token}
            user={user}
          />
        )}
      </div>
    </div>
  );
}
