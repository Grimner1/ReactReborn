import React from "react";
import UserList from "./UserList";

const users = [
  {
    name: "Tod",
    age: 32,
  },
  {
    name: "Sam",
    age: 28,
  },
  {
    name: "Jena",
    age: 22,
  },
  {
    name: "Lusia",
    age: 55,
  },
  {
    name: "Hovard",
    age: 61,
  },
  {
    name: "Ninja",
    age: 18,
  },
];

const App = () => {
  return <UserList users={users} />;
};

//sasas

export default App;
