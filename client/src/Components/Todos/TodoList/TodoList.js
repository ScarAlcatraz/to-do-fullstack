import React from "react";
import "./TodoList.scss";
import Todo from "../Todo/Todo";

export default function TodoList({ todos, deleteHandler, updateHandler }) {
  return (
    <div className="TodoList-container">
      <div className="TodoList-wrapper">
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              deleteHandler={deleteHandler}
              updateHandler={updateHandler}
            />
          );
        })}
      </div>
    </div>
  );
}
