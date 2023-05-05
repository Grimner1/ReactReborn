import React from "react";
import StartElem from "./jsx/start";

const serverUrl = "https://61856c5523a2fe0017fff620.mockapi.io/api/ToDoList";

const App = () => {
  return <StartElem url={serverUrl} />;
};

export default App;
