import React from "react";
import { TodoList } from "../ui/TodoList";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V2", []);

  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchTodos = [];
  if (!searchValue.length >= 1) {
    searchTodos = todos;
  } else {
    searchTodos = todos.filter((todo) => {
      const todotext = todo.text.toLowerCase();
      const searchtext = searchValue.toLowerCase();
      return todotext.includes(searchtext);
    });
  }

  const addTodo = (text) => {
    const id = newTodoId(todos);
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
      id,
    });
    saveTodos(newTodos);
  };

  const getTodo =(id)=>{
    const todoIndex = todos.findIndex(todo=> todo.id ===id);
    return todos[todoIndex]
  }


  const completeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    // poder desmarcar el check
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };
  const editTodo = (id, newText) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].text = newText;
    saveTodos(newTodos);
  };
  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  const state = {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchTodos,
    getTodo,
  };

  const stateUpdates = {
    setSearchValue,
    completeTodo,
    addTodo,
    editTodo,
    deleteTodo,
    sincronizeTodos,
  };
  return { state, stateUpdates };
}

function newTodoId(todoList){
  if(!todoList.length){
    return 1;
  }
  const idList = todoList.map(todo=> todo.id);
  const idMax = Math.max(...idList);
  return idMax+1;
}

export { useTodos };
