import { useState } from "react";
import ShowActive from "./components/ShowActive";

import "./App.css";

function App() {
  const [showActiveComp, setShowActiveComp] = useState(false);

  return (
    <div className="App">
      {showActiveComp ? <ShowActive /> : ""}
      <button
        onClick={() => setShowActiveComp((previousState) => !previousState)}
      >
        Show Active Component
      </button>
    </div>
  );
}

export default App;
