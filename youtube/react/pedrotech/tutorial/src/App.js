import "./App.css";
import { Planet } from "./Planet.js"; // React component of Planet
import { planets } from "./planets.js"; // list of planets

// Exercise: display planet's name only if they ARE a gas planet
function App() {
  return (
    <div className="App">
      <h2>
        {planets
          .filter((planet) => planet.isGasPlanet)
          .map((gasPlanet, key) => {
            return <Planet name={gasPlanet.name} key={key} />;
          })}
      </h2>
    </div>
  );
}

export default App;
