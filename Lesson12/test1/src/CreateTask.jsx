import React, { Component } from "react";

const CreateTask = ({ handleChangeInput, handleChangeAddTask, inputText }) => {
  return (
    <div className="create-task">
      <input
        className="create-task__input"
        type="text"
        value={inputText}
        onChange={handleChangeInput}
      />
      <button className="btn create-task__btn" onClick={handleChangeAddTask}>
        Create
      </button>
    </div>
  );
};

export default CreateTask;
