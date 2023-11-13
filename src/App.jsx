import React, { useState, useEffect } from "react";
import AddToDo from "./components/AddToDo"
import "./App.scss"


function App() {

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

  const handleDelete = (todo) => {
    console.log("i am on delete of", todo)
    setTodos(todos.filter(item => {
      return item !== todo;
    }
    ));
  }

  const addList = (title, desc, category, image) => {
  //console.log("oh add", title, desc);
  //let sno= todos[todos.length-1].sno+=1;

    const myTodo = {
  //  sno: sno,
      title: title,
      desc: desc,
      category: category,
    }
    setTodos([...todos, myTodo])
    //console.log(myTodo)
  }

  return (
    <div>
      <AddToDo todos={todos} handleDelete={handleDelete} addList={addList} />
    </div>
  );
}

export default App;
