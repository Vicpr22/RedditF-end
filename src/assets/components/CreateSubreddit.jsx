import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { API } from "../API";

export default function CreateSubreddit() {
  const [name, setName] = useState("");
  const { token, fetchSubreddits } = useOutletContext();
  const navigate = useNavigate();

  async function handleCreateSubreddit(e) {
    e.preventDefault();
    const res = await fetch(`${API}/subreddits`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
      }),
    });
    fetchSubreddits();
    navigate("/subreddits");
  }

  return (
    <div>
      <form action="" onSubmit={handleCreateSubreddit}>
        <input
          type="text"
          placeholder="Enter a Name..."
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button>Create!</button>
      </form>
    </div>
  );
}
