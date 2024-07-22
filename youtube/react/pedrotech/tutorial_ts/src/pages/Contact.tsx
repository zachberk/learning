import React from "react";
import { useSelector } from "react-redux";

interface ContactProps {}

export const Contact: React.FC<ContactProps> = () => {
  const username = useSelector((state: any) => state.user.value.username);
  return (
    <div>
      <h1>Contact Page</h1>
      <h1>{username}</h1>
    </div>
  );
};
