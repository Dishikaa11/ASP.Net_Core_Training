import React from "react";

function TodoItem({ todo, deleteTodo, toggleComplete }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />

      <span className={todo.completed ? "completed" : ""}>
        {todo.text}
      </span>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="delete-btn"
      >
        ❌
      </button>
    </div>
  );
}
export default TodoItem;