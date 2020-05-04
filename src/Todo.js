import React, { useState } from "react";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through red" : "" }}
      className="todo"
    >
      {todo.text}
      <div>
        <button className="complete" onClick={() => completeTodo(index)}>
          Complete
        </button>
        <button className="remove" onClick={() => removeTodo(index)}>
          X
        </button>
      </div>
    </div>
  );
}

export default Todo;
