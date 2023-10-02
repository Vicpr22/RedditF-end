import { Link } from "react-router-dom";

export default function NavBar(props) {
  const { user, setUser, setToken } = props;

  function handleLogout() {
    setToken("");
    setUser({});
    localStorage.removeItem("token");
  }

  return (
    <div id="navbar-container">
      <div id="left-link">
        <Link to={"/"}>Home</Link>
        <Link to={"/subreddits"}>Subreddits</Link>
      </div>
      <div id="right-links">
        {!user.id ? (
          <>
            <Link to={"/login"}>Login</Link>
            <Link to={"/signup"}>SignUp</Link>
          </>
        ) : (
          <>
            <span id="welcome-text">Welcome {user.username}</span>
            <Link onClick={handleLogout} to={"/"}>
              Logout
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
