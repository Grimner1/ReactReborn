import React, { useState, useEffect } from "react";
import { UseParams } from "react-router-dom";

const Dimension = () => {
  const [windowParam, setWindowParam] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setWindowParam({
      width: innerWidth,
      height: innerHeight,
    });

    const handleResize = (e) => {
      const { innerWidth, innerHeight } = e.target;
      setWindowParam({
        width: innerWidth,
        height: innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { width, height } = windowParam;

  return <div className="dimensions">{`${width}px - ${height}px`}</div>;
};

export default Dimension;
