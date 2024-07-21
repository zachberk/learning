import { useCount } from "../useCount";

export const Counter = () => {
  const { count, increaseCount, decreaseCount, restartCount } = useCount();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={restartCount}>Restart</button>
    </div>
  );
};
