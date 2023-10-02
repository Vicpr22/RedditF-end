import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./assets/components/NavBar";
import { useEffect, useState } from "react";
import { API } from "./assets/API";
import SubReddit from "./assets/components/SubReddit";

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [subreddits, setSubreddits] = useState([]);
  const [posts, setPosts] = useState([]);

  async function fetchSubreddits() {
    const res = await fetch(`${API}/subreddits/`);
    const info = await res.json();
    setSubreddits(info.subreddits);
  }
  async function fetchPosts() {
    const res = await fetch(`${API}/posts/`);
    const info = await res.json();
    setPosts(info.posts);
  }

  async function fetchUser() {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
    }
    if (!token) {
      return;
    }
    const res = await fetch(`${API}/users/token`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const info = await res.json();
    if (info.success) {
      setUser(info.user);
    }
  }
  useEffect(() => {
    fetchUser();
    fetchSubreddits();
    fetchPosts();
  }, [token]);

  return (
    <>
      <NavBar user={user} setUser={setUser} setToken={setToken} />
      <Outlet
        context={{
          user,
          setToken,
          fetchPosts,
          token,
          subreddits,
          fetchSubreddits,
          posts,
        }}
      />
    </>
  );
}

export default App;
