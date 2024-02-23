import React, { useState, useEffect } from 'react'
import "./App.scss"
import ToDoWrapper from './components/ToDoWrapper';
import SingleToDo from './components/SingleToDo';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


const App = () => {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const handleDelete = (id) => {
    console.log("i am on delete of", id)
    setTodos(todos.filter(item => {
      return item !== id
    }
    ));
  }

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<ToDoWrapper todos={todos} setTodos={setTodos} handleDelete={handleDelete}/>} />
          <Route exact path="/todo/:id" element={<SingleToDo todos={todos} setTodos={setTodos} handleDelete={handleDelete}/>} />
        </Routes>
      </Router>
    </>

  )
}

export default App