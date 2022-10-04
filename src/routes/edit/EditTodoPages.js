import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import {TodoForm} from '../../ui/TodoForm'
import { useTodos } from '../useTodos';
function EditTodoPages() {
  const location= useLocation()
  const params = useParams();
  const id = Number(params.id);

  const {state, stateUpdates}= useTodos();
  const {loading, getTodo}=state;
  const {editTodo} =stateUpdates;

  let todoText;

  if(location.state?.todo){
    todoText=location.state.todo.text
  }else if(loading){
    return <p>Cargando....</p>
  }else{
    const todo=getTodo(id);
    todoText=todo.text;

  }
    return (
      <TodoForm
      label='Edita tu TODO'
      defaultTodoText={todoText}
      submitEvent={(newText)=>editTodo(id, newText)}
      />
      )
}
export {EditTodoPages};