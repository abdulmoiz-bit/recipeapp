import React, { useState } from "react";
import AddToDo from "./components/AddToDo"
import "./App.scss"


function App() {

  const [todos, setTodos] = useState([]);

  const handleDelete = (todo) => {
    console.log("i am on delete of", todo)
    setTodos(todos.filter(item => {
      return item !== todo;
    }
    ));
  }

  const addList = (title, desc) => {
  //console.log("oh add", title, desc);
  //let sno= todos[todos.length-1].sno+=1;

    const myTodo = {
  //  sno: sno,
      title: title,
      desc: desc,
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
