import React, { useState } from "react";
import "./Todo.scss";

export default function Todo({ todo, deleteHandler, updateHandler }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState();

  const updatedTodoState = (e) => {
    setUpdatedTodo({
      id: todo.id,
      message: e.target.value,
    });
  };

  const updateAndReset = (input, e) => {
    e.preventDefault();
    // call updateHandler with the input
    updateHandler(input);
    setIsEditing(false);
  };

  return (
    <div className="Todo-container">
      <div className="Todo-wrapper">
        {isEditing ? (
          <form onSubmit={(e) => updateAndReset(updatedTodo, e)} className='Todo-editing'>
            <input
              type="text"
              defaultValue={todo.message}
              onChange={updatedTodoState}
            />
          </form>
        ) : (
          <p className="Note" onDoubleClick={() => setIsEditing(true)}>
            {todo.message}
          </p>
        )}
        <button className="Done-btn" onClick={() => deleteHandler(todo.id)}>
          Done
        </button>
      </div>
    </div>
  );
}
