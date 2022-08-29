import React from "react";
import ReactDOM from "react-dom";
import "../styles/ModalDelete.css";
function ModalDelete({ children }) {
  return ReactDOM.createPortal(
    <div className="ModalDelete">
        {children}
    </div>,
    document.getElementById("modalDelete")
  );
}

export { ModalDelete };
