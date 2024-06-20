import "./App.css";
import { Planet } from "./Planet.js"; // React component of Planet
import { planets } from "./planets.js"; // list of planets

// Exercise: display planet's name only if they ARE a gas planet
function App() {
  return (
    <div className="App">
      {planets.map(
        (planet, key) =>
          planet.isGasPlanet && (
            <h2>
              <Planet name={planet.name} key={key} /> 
            </h2>
          )
      )}
    </div>
  );
}

export default App;
