import React from "react";
import { useNavigate } from "react-router-dom";
/////
import { useTodos } from "../useTodos";
import { TodoHeader } from "../../ui/TodoHeader/index";
import { TodoCounter } from "../../ui/TodoCounter";
import { TodoSearch } from "../../ui/TodoSearch";
import { TodoList } from "../../ui/TodoList";
import { TodoItem } from "../../ui/TodoItem";
import { TodosError } from "../../ui/TodosError";
import { TodosLoading } from "../../ui/TodosLoading";
import { EmptyTodos } from "../../ui/EmptyTodos";
// import { TodoForm } from "../../ui/TodoForm";
import { CreateTodoButton } from "../../ui/CreateTodoButton";
import { SearchValueTodos } from "../../ui/SearchValueTodos";
// import { Modal } from "../../ui/Modal/index";
import { ChangeAlert } from "../../ui/ChangeAlert";

function HomePage() {
  const navigate = useNavigate();
  const { state, stateUpdates } = useTodos();

  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchTodos,
    // openModal,
  } = state;
  const {
    // setOpenModal,
    setSearchValue,
    completeTodo,
    // addTodo,
    deleteTodo,
    sincronizeTodos,
  } = stateUpdates;

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchTodos={searchTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <SearchValueTodos searchText={searchText} />
        )}
      >
        {(todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onEdit={() => {
              navigate(
                '/edit/'+todo.id,
                {
                  state:{todo}
                }
              )
            }}
            onComplete={() => {completeTodo(todo.id)}}
            onDelete={() => deleteTodo(todo.id)}
          />
        )}
      </TodoList>
      {/* {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )} */}

      <CreateTodoButton
        onClick={()=>navigate('/new')}
        // setOpenModal={setOpenModal} 
      />
      <ChangeAlert sincronize={sincronizeTodos} />
    </React.Fragment>
  );
}

export { HomePage };
