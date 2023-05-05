import React from "react";
import Clock from "./Clock";

const App = () => {
  return (
    <>
      <Clock location={"London"} offset={0} />
      <Clock location={"Kyiv"} offset={2} />
      <Clock location={"NewYork"} offset={-10} />
    </>
  );
};

export default App;
