import React from "react";
import { useSelector } from "react-redux";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const username = useSelector((state: any) => state.user.value.username);
  return (
    <div>
      <h1>Home Page</h1>
      <h1>{username}</h1>
    </div>
  );
};
