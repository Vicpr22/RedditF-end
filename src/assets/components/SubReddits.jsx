import { Link, useOutletContext } from "react-router-dom";
import { API } from "../API";
import { useEffect, useState } from "react";
import SubReddit from "./SubReddit";
import CreateSubreddit from "./CreateSubreddit";

export default function SubReddits() {
  const { subreddits, user, fetchSubreddits, token } = useOutletContext();

  return (
    <div id="subreddits-container">
      <Link to={"/createsubreddit"} className="create-link">
        Create Subreddit!
      </Link>
      {}
      {subreddits.map((subreddit) => {
        return (
          <div className="individual-subreddit-container" key={subreddit.id}>
            <SubReddit
              subreddit={subreddit}
              user={user}
              fetchSubreddits={fetchSubreddits}
              token={token}
            />
          </div>
        );
      })}
    </div>
  );
}
