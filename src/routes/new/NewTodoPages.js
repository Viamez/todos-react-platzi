import React from 'react'
import {TodoForm} from '../../ui/TodoForm'
import { useTodos } from '../useTodos';
function NewTodoPages() {
  const {stateUpdates}= useTodos();
  const {addTodo} =stateUpdates;
  return (
    <TodoForm
      label='Crea tu TODO'
      submitEvent={(text)=>addTodo(text)}
    />
  )
}
export {NewTodoPages};