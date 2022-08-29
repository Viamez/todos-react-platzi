import React from "react";
import { useTodos} from "./useTodos";
import { TodoHeader } from "../TodoHeader/index";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { ChangeAlertWithStorageListener } from "../ChangeAlert";
import { Modal } from "../Modal/index";
// import { ModalDelete } from "../ModalDelete/index";
import {EmptyTodos} from "../components/EmptyTodos";
import {TodosError} from "../components/TodosError";
import { SearchValueTodos } from "../components/SearchValueTodos";
import {TodosLoading} from "../components/TodosLoading";
import { TodoForm } from "../TodoForm";
// import { TodoFormDelete } from "../TodoFormDelete";

function App() {
  const {
    error,
    loading,
    searchTodos,
    toggleCompleteTodo,
    deleteTodo,
    openModal,
    // openModalDelete,
    setOpenModal,
    // setOpenModalDelete,
    addTodo,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
  } = useTodos();

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
        // render={todo=>(
        //   <TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => {
        //       toggleCompleteTodo(todo.text);
        //     }}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}
      >
        
        {todo=>(
          
          <TodoItem
            // setOpenModalDelete={setOpenModalDelete}
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
           
       {/* {!!openModalDelete&&(
         <ModalDelete>
          <TodoFormDelete
          addTodo={addTodo}
          setOpenModalDelete={setOpenModalDelete} />
       </ModalDelete>
       )} */}

      <CreateTodoButton setOpenModal={setOpenModal} />
      <ChangeAlertWithStorageListener/>
    </React.Fragment>
  );
}

export default App;
