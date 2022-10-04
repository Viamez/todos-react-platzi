import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import {HomePage} from './home/HomePage'
import {NewTodoPages} from './new/NewTodoPages'
import {EditTodoPages} from './edit/EditTodoPages'

function App() {
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/new" element={<NewTodoPages/>} />
        <Route path="/edit/:id/" element={<EditTodoPages/>} />
        <Route path="*" element={<p>No found</p>} />
      </Routes>
    </HashRouter>
  );
}

export {App};
