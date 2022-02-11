import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteresTodos, setFilteresTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteresTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteresTodos(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setFilteresTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
   
      localStorage.setItem("todos", JSON.stringify(todos));
    
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal=JSON.parse(localStorage.getItem("todos", JSON.stringify(todos)));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      ></Form>
      <ToDoList
        setTodos={setTodos}
        todos={todos}
        filteresTodos={filteresTodos}
      ></ToDoList>
    </div>
  );
}

export default App;
