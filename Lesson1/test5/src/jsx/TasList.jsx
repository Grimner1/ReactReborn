import React from "react";
import Task from "./Task";

const serverUrl = "https://61856c5523a2fe0017fff620.mockapi.io/api/ToDoList";

const creatList = (...list) => {
  console.log(list);
  const y = [...list];
  console.log(y);
  const x = list.map((el) => <li className="list__item">{el}</li>);
  console.log(x);
  return x;
};

const TaskList = (list) => {
  //   console.log(list);
  creatList(list);
  //   return <li className="list__item">aaa</li>;
  return creatList;
};

export default TaskList;
