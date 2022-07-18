import React, { useState } from "react";
import axios from "axios";
import "./TodoForm.scss";
import Greet from "../../Greet/Greet";

export default function TodoForm({ todos, setTodos }) {
  const initialState = {
    id: "",
    message: "",
  };

  const [todo, setTodo] = useState(initialState);

  const handleChange = (e) => {
    setTodo({
      id: Date.now(),
      message: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([todo, ...todos]);
    axios
      .post("http://localhost:5000/todos", todo)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setTodo(initialState);
  };

  return (
    <div className="form-container">
      <Greet/>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="todo"
            placeholder="Enter your To-do item"
            autoComplete="off"
            value={todo.message}
            onChange={handleChange}
          />
          <button type="submit" className="submit-btn">
            Add To-do
          </button>
        </form>
      </div>
    </div>
  );
}
