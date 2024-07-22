import React from "react";
import { useState } from "react";
import { login, logout } from "../store";
import { useDispatch, useSelector } from "react-redux";

interface LoginProps {
  isLoggedIn: boolean;
}

export const Login: React.FC<LoginProps> = () => {
  const [newUsername, setNewUsername] = useState("");
  const dispatch = useDispatch();
  const username = useSelector((state: any) => state.user.value.username);
  const handleSubmitLogin = () => {
    if (newUsername.trim() !== "")
      dispatch(login({ username: newUsername.trim() }));
    setNewUsername("");
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewUsername(event.target.value);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && newUsername !== "") {
      dispatch(login({ username: newUsername.trim() }));
      setNewUsername("");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center items horizontally in the container
        height: "100vh", // Make the flex container fill the entire height of the viewport
        width: "50%",
        margin: "0 auto", // Center the container itself horizontally
      }}
    >
      <input
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter your username"
        value={newUsername}
      />
      <button onClick={handleSubmitLogin}>Submit Login</button>
      <button onClick={handleLogout}>Logout</button>
      <h1>{username}</h1>
    </div>
  );
};
