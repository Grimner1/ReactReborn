import React from "react";
import ClassNames from "classnames";

const ListItem = ({ task, handleChangeChecked, handleChangeDeleteTask }) => {
  const { text, checked, id } = task;
  // 3)  const classDone = ClassNames("list-item", { "list-item_done": checked });
  // 2)  const classDone = `list-item ${checked ? "list-item_done" : ""}`;
  // 1)   checked ? "list-item list-item_done" : "list-item";
  return (
    <li className={ClassNames("list-item", { "list-item_done": checked })}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        checked={checked}
        onChange={handleChangeChecked}
        data-id={id}
      />
      <span className="list-item__text">{text}</span>
      <button
        className="list-item__delete-btn"
        data-id={id}
        onClick={handleChangeDeleteTask}
      ></button>
    </li>
  );
};

export default ListItem;

// ListItem.ProTotypes = {
//   text: PropTypes.string,
// };
