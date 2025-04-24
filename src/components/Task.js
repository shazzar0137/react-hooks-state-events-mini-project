import React from "react";

function Task({ text, category, id, task, onTaskDelete }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => onTaskDelete(task.id)}>X</button>
    </div>
  );
}

export default Task;