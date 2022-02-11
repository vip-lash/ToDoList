import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Error from "./Error";

const Form = ({ setInputText, setTodos, todos, inputText, setStatus }) => {
  const [size, setSize] = useState(0);

  const inputTextHandler = (e) => {
    //console.log(e.target.value);
    setInputText(e.target.value);
    if (e.target.value === "") setSize(6);
    else setSize(e.target.value.length);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div>
      <form>
        <div className="cont">
          <input
            value={inputText}
            onChange={inputTextHandler}
            type="text"
            className="todo-input"
          />
          <button
            onClick={submitHandler}
            className="todo-button"
            type="submit"
            disabled={size < 6}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
      <div> {size < 6 && size !== 0 ? <Error /> : ""}</div>
    </div>
  );
};

export default Form;
