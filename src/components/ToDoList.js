import React from "react";
import Todo from "./Todo";

const ToDoList = ({ todos, setTodos, filteresTodos }) => {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {filteresTodos.map((todo) => (
            <Todo
              text={todo.text}
              key={todo.id}
              setTodos={setTodos}
              todos={todos}
              todo={todo}
            />
          ))}
        </ul>
      </div>
     
    </div>
  );
};

export default ToDoList;
