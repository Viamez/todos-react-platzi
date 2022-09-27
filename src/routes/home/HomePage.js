import React from "react";
import { useTodos} from "../useTodos";
import { TodoHeader } from "../../ui/TodoHeader/index";
import { TodoCounter } from "../../ui/TodoCounter";
import { TodoSearch } from "../../ui/TodoSearch";
import { TodoList } from "../../ui/TodoList";
import { TodoItem } from "../../ui/TodoItem";
import {TodosError} from "../../ui/TodosError";
import {TodosLoading} from "../../ui/TodosLoading";
import {EmptyTodos} from "../../ui/EmptyTodos";
import { TodoForm } from "../../ui/TodoForm";
import { CreateTodoButton } from "../../ui/CreateTodoButton";
import { SearchValueTodos } from "../../ui/SearchValueTodos";
import { Modal } from "../../ui/Modal/index";
import { ChangeAlert } from "../../ui/ChangeAlert";

function HomePage() {
  const {
   states,
   stateUpdates
  } = useTodos();

  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchTodos,
    openModal,
  } =states;
  const {
    setSearchValue,
    toggleCompleteTodo,
    addTodo,
    deleteTodo,
    setOpenModal,
    sincronizeTodos,
  }= stateUpdates

  return (
    <React.Fragment>

      <TodoHeader loading={loading}>
        <TodoCounter 
          totalTodos={totalTodos} 
          completedTodos={completedTodos}
           />
        <TodoSearch 
          searchValue={searchValue} 
          setSearchValue={setSearchValue} 
          />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchTodos={searchTodos}
        searchText={searchValue}
        
        onError={()=><TodosError/> }
        onLoading={()=><TodosLoading/> }
        onEmptyTodos={()=><EmptyTodos/> }
        onEmptySearchResults={(searchText)=><SearchValueTodos
        searchText={searchText} />}
      >
        
        {todo=>(
          
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => {
              toggleCompleteTodo(todo.text);
            }}
            onDelete={() => deleteTodo(todo.text)}
          />
        )} 
        
        </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm
          addTodo={addTodo}
          setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
      <ChangeAlert sincronize={sincronizeTodos} />
    </React.Fragment>
  );
}

export {HomePage};
