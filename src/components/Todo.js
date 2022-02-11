import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,faT,faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({text,todo,setTodos,todos}) => {
    const deleteHandler=(e)=>{
        setTodos(todos.filter((el)=>el.id !== todo.id))
    }
    const completeHandler = (e) => {
      setTodos(todos.map((item) => {
          if(item.id===todo.id){
              return {
                  ...item,completed:!item.completed
              }
          }
          return item;

      }));
    };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed?"completed":""}`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default Todo;
