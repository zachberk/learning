import './App.css';
import { User } from './User.js';

function App() {
  const users = [
    { name: "Hanee", age: 48 }, 
    { name: "Pau", age: 30 }, 
    { name: "Bong", age: 50 },
    { name: "Mamita",age: 70}
  ];

  return (
    <div className="App">
      <h1> {users.map((user, key) => {
              return <User name={user.name} age={user.age} />
          })}</h1>
    </div>
  );
}

export default App;
