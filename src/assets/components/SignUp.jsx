import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { API } from "../API";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setToken } = useOutletContext();

  const navigate = useNavigate();

  async function handleSignUp(e) {
    e.preventDefault();
    const res = await fetch(`${API}/users/register`, {
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
    console.log(info);
  }
  return (
    <div id="signup-container">
      <div id="form-container">
        <form onSubmit={(e) => handleSignUp(e)}>
          <h1 id="rgstr">Sign Up</h1>
          <label id="username">Username</label>
          <input
            type="text"
            placeholder="Username.."
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />

          <label id="psw">Password</label>
          <input
            value={password}
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password.."
          />

          <button type="submit" id="registerbtn">
            Sign Up
          </button>
          <p>{error}</p>
        </form>
      </div>
    </div>
  );
}
