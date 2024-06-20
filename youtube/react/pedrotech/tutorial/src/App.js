import './App.css';

function App() {
  const name1 = GetNameComponent(); // assigned using return value of the component GetNameComponent
  const age1 = <h2>Age: 21</h2>;
  const email1 = <h2>Email: hello@world.com</h2>;
  const user1 = (
    <div>
      <h1>User1: JS Variable</h1>
      {name1}
      {age1}
      {email1}
    </div>
  );

  return (
  <div className="App">
    {user1}
    <br></br>
    <User2 name="Pedro" age={21} email="pedro@world.com" />
    <br></br>
    <User2 name="Jake" age={18} email="jake@world.com" />
    <br></br>
    <User2 name="Zach" age={22} email="zach@world.com" />
  </div>
  );
}

const props_example = {
  name: "Pedro",
  age: 21,
  email: "pedro@world.com"
};

// JS Function:
// const getName = () => {
//   return "Pedro";
// }

// React Components:
const GetNameComponent = () => {
  return <h1>Name: Pedro</h1>;
};

const User2 = (props) => {
  return (
    <div>
      <h1>User2: React Component</h1>
      <h2>Name: {props.name}</h2>
      <h2>Age: {props.age}</h2>
      <h2>Email: {props.email}</h2>
    </div>
  );
}

export default App;
