import { useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  const restartCount = () => {
    setCount(0);
  };
  return { count, increaseCount, decreaseCount, restartCount };
};
