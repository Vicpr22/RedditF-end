import { Link, useOutletContext } from "react-router-dom";
import { API } from "../API";

export default function SubReddit({ subreddit, user, fetchSubreddits, token }) {
  const canDelete = user && user.id === subreddit.userId;

  async function deletesubreddit(e) {
    e.preventDefault();
    const res = await fetch(`${API}/subreddits/${subreddit.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const info = await res.json();
    console.log(info);

    fetchSubreddits();
  }
  return (
    <div className="individual-subreddit">
      <Link to={`/subreddits/${subreddit.name}`}> {subreddit.name}</Link>
      {canDelete && <button onClick={deletesubreddit}>Delete</button>}
    </div>
  );
}
