import React, { useState, useEffect } from "react";
import "./App.scss"
import AddToDo from "./components/AddToDo"
import SingleToDo from "./components/SingleToDo";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {

  // LOCAL STORAGE
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


  const addList = (image, title, desc, category) => {

    let id;
    if (todos.length === 0) {
      id = 0;
    }
    else {
     id = todos[todos.length - 1].id + 1;
    }

    //console.log("oh add", title, desc);
    //let sno = todos[todos.length-1].sno + 1;
    const myTodo = {
      id: id,
      image: image,
      title: title,
      desc: desc,
      category: category,
    }
    setTodos([...todos, myTodo])
    console.log(myTodo)
  }

  const handleDelete = (todo) => {
    console.log("i am on delete of", todo)
    setTodos(todos.filter(item => {
      return item !== todo;
    }
    ));
  }
 
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<AddToDo addList={addList} todos={todos} handleDelete={handleDelete}/>} />
          <Route exact path="/todo/:id" element={<SingleToDo todos={todos} handleDelete={handleDelete}/>}/>
        </Routes>
      </Router> 
      
    </>
  );
}

export default App;
