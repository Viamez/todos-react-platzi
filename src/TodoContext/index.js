import React from "react";
import {useLocalStorage} from "./useLocalStorage";
const TodoContext= React.createContext();

function TodoProvider(props){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage("TODOS_V1", []);
    
      const [searchValue, setSearchValue] = React.useState("");
      const [openModal, setOpenModal]=React.useState(false);

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
        const newTodos = [...todos];
        newTodos.push({
          completed:false,
          text,
        });
        saveTodos(newTodos);
      };
      const toggleCompleteTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
      };
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };
    return(

        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchTodos,
            toggleCompleteTodo,
            addTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};