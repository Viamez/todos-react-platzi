import React from "react";
import "../styles/TodoFormDelete.css"

function TodoFormDelete(props){
    // const onCancel=()=>{
    //     setOpenModalDelete(false)
    // };
    return(
        <form>
            <label>{props.text}</label>
             <div className="TodoForm-buttonContainer">
                <button type="button"  className="TodoForm-button TodoForm-button--cancel">
                    Cancelar
                </button>
                <button type="submit" className="TodoForm-button TodoForm-button--add">
                    Aceptar
                </button>
             </div>
        </form>
    )
}

export {TodoFormDelete};