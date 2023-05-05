import React from "react";

const NumberList = ({ num }) => {
  console.log(num);
  return (
    <ul>
      {num.map((el) => (
        <li key={el}>{el}</li>
      ))}
    </ul>
  );
};

export default NumberList;
