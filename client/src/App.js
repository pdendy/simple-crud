import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Age:</label>
        <input type="number" />
        <label>Country:</label>
        <input type="text" />
        <label>Position:</label>
        <input type="text" />
        <label>Wage: (year):</label>
        <input type="number" />
        <button>Add Employee</button>
      </div>
    </div>
  );
}

export default App;
