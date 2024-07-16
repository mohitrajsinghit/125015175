import { useState } from "react";
import NumberFetcher from "./NumberFetcher";
import "./App.css";

function App() {
  const [count, setCount] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Average Calculator</h1>
        <NumberFetcher />
      </header>
    </div>
  );
}

export default App;
