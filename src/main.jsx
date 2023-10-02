import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBar from "./assets/components/NavBar.jsx";
import Login from "./assets/components/Login.jsx";
import SignUp from "./assets/components/SignUp.jsx";
import SubReddit from "./assets/components/SubReddit.jsx";
import Home from "./assets/components/Home.jsx";
import CreatePost from "./assets/components/CreatePost.jsx";
import SubReddits from "./assets/components/SubReddits.jsx";
import CreateSubreddit from "./assets/components/CreateSubreddit.jsx";
import SingleSubReddit from "./assets/components/SingleSubReddit.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "subreddit", element: <SubReddit /> },
      { path: "/subreddits", element: <SubReddits /> },
      { path: "", element: <Home /> },
      { path: "createpost", element: <CreatePost /> },
      { path: "createsubreddit", element: <CreateSubreddit /> },
      { path: "subreddits/:subredditName", element: <SingleSubReddit /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
