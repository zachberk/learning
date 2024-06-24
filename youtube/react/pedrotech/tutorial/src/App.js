import "./App.css";
import Axios from "axios";
import { useState } from "react";

function App() {
  const [excuse, setExcuse] = useState(null);
  const fetchExcuse = async (ext) => {
    const res = await Axios.get(
      `https://excuser-three.vercel.app/v1/excuse${ext}`
    );
    console.log(res.data[0]);
    setExcuse(res.data[0]);
  };

  return (
    <div className="App">
      <h1> Generate an Excuse </h1>
      <button onClick={() => fetchExcuse("/")}> Random </button>
      <button onClick={() => fetchExcuse("/party/")}> Party </button>
      <button onClick={() => fetchExcuse("/family/")}> Family </button>
      <button onClick={() => fetchExcuse("/office/")}> Office </button>
      <p> Category: {excuse?.category} </p>
      <p> Excuse: {excuse?.excuse} </p>
      <p> ID: {excuse?.id} </p>
    </div>
  );
}

export default App;
