import React from "react";

const GameHistory = (props) => {
  const handleClick = () => {
    props.click(props.number);
  };

  const num = props.number + 1;

  return (
    <button onClick={handleClick}>{`Вернуться на ход номер ${num}`}</button>
  );
};

export default GameHistory;
