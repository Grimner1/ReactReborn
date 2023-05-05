import React, { useState } from "react";
import ConnectionStatus from "./ConnectionStatus";

const App = () => {
  const [state, setState] = useState(true);

  const handleChange = () => {
    setState(!state);
  };

  return (
    <div>
      {state && <ConnectionStatus />}

      <button onClick={handleChange}>{state ? "Close" : "Open"}</button>
    </div>
  );
};

//sasas

export default App;
