import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { API } from "../API";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const { token, subreddits, fetchPosts } = useOutletContext();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [selectedSubredditId, setSelectedSubredditId] = useState({});

  const navigate = useNavigate();

  async function handleCreatePosts(event) {
    event.preventDefault();

    const res = await fetch(`${API}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token} `,
      },
      body: JSON.stringify({
        title, // optional
        text,
        subredditId: selectedSubredditId,
        parentId: null,
      }),
    });
    const info = await res.json();
    fetchPosts();
    navigate("/");
  }

  return (
    <div className="reddit-post-form">
      <form id="form-container" onSubmit={handleCreatePosts}>
        <h1>Create a Post!</h1>
        <select
          value={selectedSubredditId}
          onChange={(e) => setSelectedSubredditId(e.target.value)}
        >
          <option value="">Select a Subreddit</option>
          {subreddits.map((subreddit) => (
            <option key={subreddit.id} value={subreddit.id}>
              {subreddit.name}
            </option>
          ))}
        </select>
        <input
          className="reddit-title-input"
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          className="reddit-text-input"
          placeholder="Text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        ></textarea>
        <button className="reddit-submit-btn">Submit</button>
      </form>
    </div>
  );
}
