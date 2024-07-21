import { useContext } from "react";
import { AppContext } from "../App.js";

export const Home = () => {
  const { username } = useContext(AppContext);
  return <h1> This is the homepage and user is: {username} </h1>;
};
