import React from "react";
import "../styles/CreateTodoButton.css";

function CreateTodoButton(props) {
  return (
    <button className="CreateTodoButton" onClick={props.onClick}>
      +
    </button>
  );
}

export { CreateTodoButton };
