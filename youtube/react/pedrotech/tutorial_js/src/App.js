import "./App.css";
import { Person } from "./components/Person";

function App() {
  const person1 = {
    name: "Zach",
    email: "zberk@gmail.com",
    age: 21,
    isMarried: false,
    friends: ["Thomas", "Lucas", "George"],
  };
  return (
    <div className="App">
      <Person
        name={person1.name}
        email={person1.email}
        age={person1.age}
        isMarried={person1.isMarried}
        friends={person1.friends}
      />
    </div>
  );
}

export default App;
