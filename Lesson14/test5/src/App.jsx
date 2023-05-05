import React from "react";
import { useState, useEffect } from "react";
import Clock from "./Clock";

const App = () => {
  const [show, setShow] = useState(true);

  const handleChangeShowComponent = () => {
    setShow(!show);
  };

  return (
    <>
      {show && <Clock location={"London"} offset={0} />}
      {show && <Clock location={"Kyiv"} offset={120} />}
      {show && <Clock location={"New York"} offset={-300} />}
      <button onClick={handleChangeShowComponent}>
        {show ? "Hide" : "Show"}
      </button>
    </>
  );
};

//sasas

export default App;
