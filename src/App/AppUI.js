import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoHeader } from "../TodoHeader/index";
import {TodoCounter} from "../components/TodoCounter";
import {TodoSearch} from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import {Modal} from "../Modal/index";
import { TodoForm } from "../TodoForm";
function AppUI() {
  const { 
    error,
    loading, 
    searchTodos, 
    toggleCompleteTodo, 
    deleteTodo, 
    openModal, 
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue
      } =React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>
      
      <TodoList>
        {error && <p>No Estamos cargandoooo</p>}
        {loading && <p>Estamos cargando</p>}
        {!loading && !searchTodos.length && <p>Crea tu primer Todo :D</p>}
        {searchTodos.map((todo) => (
          
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => {
                toggleCompleteTodo(todo.text);
              }}
              onDelete={() => deleteTodo(todo.text)}
            />
          
        ))}
      </TodoList>
        {!!openModal && (
        <Modal>
        <TodoForm/>
      </Modal>
      )}


      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };
