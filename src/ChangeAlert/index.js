import React from "react";
import { withStorageListener } from "./withStorageListener";
import "../styles/ChangeAlert.css"
function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container" >
        <p>Parece que tus TODOS fueron cambiado</p>
        <p>¿Quieres sincronizar tus TODOS?</p>
        <button 
          className="TodoForm-button TodoForm-button--add" 
          onClick={toggleShow}>
            Actualizar la informacion
        </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
export { ChangeAlertWithStorageListener };
