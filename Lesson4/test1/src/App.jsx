import React from "react";
import Counter from "./Counter";

const App = () => {
  return (
    <>
      <Counter start={-1000} interval={10} />
      <Counter start={-100} interval={100} />
      <Counter start={-1} interval={1000} />;
    </>
  );
};

export default App;
