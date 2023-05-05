import React from "react";
import UserForm from "./UserForm";

const App = () => {
  const submit = (user) => {
    console.log(user);
  };

  return <UserForm createUser={submit} />;
};

//sasas

export default App;
