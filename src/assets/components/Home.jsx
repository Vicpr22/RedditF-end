import { Link, useOutletContext } from "react-router-dom";
import React, { useState } from "react";
import Posts from "./Posts";
import SubReddit from "./SubReddit";
import CreatePost from "./CreatePost";

export default function Home() {
  const { posts, fetchPosts, token, user } = useOutletContext();

  return (
    <div id="welcome-container">
      <h1 id="welcome">Welcome to Redditer</h1>
      <hr id="bar1" />
      <div id="body-container">
        <div id="post-container">
          <Link to={"/createpost"} className="create-post-link">
            Create Post
          </Link>
          {posts.map((post) => {
            return (
              <Posts
                key={post.id}
                post={post}
                token={token}
                fetchPosts={fetchPosts}
                user={user}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
