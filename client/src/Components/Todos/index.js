import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";
import Footer from '../Footer/Footer';
import axios from "axios";
import './index.scss'

export default function Todos() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/todos", {})
      .then((res) => {
        setTodoList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:5000/todos/${id}`)
      .then((res) => {
        console.log(res);
        const newTodos = todoList.filter((item) => {
          return item.id !== id;
        });
        setTodoList(newTodos);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateHandler = (todo) => {
    axios
      .put(`http://localhost:5000/todos/${todo.id}`, todo)
      .then((res) => {
        console.log(res);
        setTodoList(
          todoList.map((item) => {
            if (item.id === todo.id) {
              return {
                ...item,
                message: todo.message,
              };
            } else {
              return item;
            }
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Container">
      <div className="Wrapper">
        <TodoForm todos={todoList} setTodos={setTodoList} />
        <TodoList
          todos={todoList}
          deleteHandler={deleteHandler}
          updateHandler={updateHandler}
        />
      </div>
      <Footer />
    </div>
  );
}
