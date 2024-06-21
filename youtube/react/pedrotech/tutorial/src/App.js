import "./App.css";
import { useState } from "react";

// Increase, decrease, and set to zero button on a live counter
function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const zeroCount = () => {
    setCount(0);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }} className="App">
      <button onClick={increaseCount}> Increase </button>
      <button onClick={decreaseCount}> Decrease </button>
      <button onClick={zeroCount}> Set to Zero </button>
      {count}
    </div>
  );
}

export default App;
