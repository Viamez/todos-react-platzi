import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/TodoForm.css";

function TodoForm(props) {
  const navigate = useNavigate();
  const [newTodoValue, setNewTodoValue] = React.useState(props.defaultTodoText ||'');

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    navigate('/');
  };
  const onSubmit = (event) => {
    event.preventDefault();
    props.submitEvent(newTodoValue);
    navigate('/');
  };

  return (
    <form onSubmit={onSubmit}>
      <label>{props.label} </label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Ejem: Cortar la cebolla para el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button--cancel"
        >
          cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Aceptar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
