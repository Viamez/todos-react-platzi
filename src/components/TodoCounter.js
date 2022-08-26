import React from 'react';
import '../styles/TodoCounter.css'
function TodoCounter({totalTodos, completedTodos}){
    return(
        <h2 className='TodoCounter'> 
            Has completado {completedTodos} de {totalTodos} TODOs
        </h2>
    );
}

export {TodoCounter};