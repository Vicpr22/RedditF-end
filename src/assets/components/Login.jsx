import { useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";
import { API } from "../API";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setToken } = useOutletContext();

  const navigate = useNavigate();

  async function handleLogin(e) {
    //console.log("logged in");
    e.preventDefault();
    const res = await fetch(`${API}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const info = await res.json();
    if (!info.success) {
      return setError(info.error);
    }
    setToken(info.token);
    localStorage.setItem("token", info.token);
    navigate("/");
  }
  //   const { user, setUser } = useOutletContext();
  // async function handleLogin(e) {
  //   e.preventDefault();
  //   console.log("Logged In");
  // }
  return (
    <div id="signup-container">
      <div id="form-container">
        <form onSubmit={(e) => handleLogin(e)}>
          <h1 id="rgstr">Login</h1>
          <label id="username">Username</label>
          <input
            type="text"
            placeholder="Username.."
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          ></input>

          <label id="psw">Password</label>
          <input
            value={password}
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password.."
          ></input>

          <button type="submit" id="registerbtn">
            Login
          </button>
        </form>
        <p>{error}</p>
      </div>
    </div>
  );
}
