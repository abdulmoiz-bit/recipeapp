import React, { useState, useEffect } from "react";
import AddToDo from "./AddToDo"
//import ToDos from "./ToDos";
//import SingleToDo from "./SingleToDo";
import ToDoItem from "./ToDoItem";
import "./ToDoWrapper.scss"
import uuid4 from "uuid4";


function ToDoWrapper({ todos, setTodos, handleDelete }) {

  // const [editTodo, setEditTodo] = useState(0);

  // LOCAL STORAGE
  /*
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

*/
  const addList = (image, title, desc, category) => {
    /*
    let id;
    if (todos.length === 0) {
      id = 0;
    }
    else {
      id = todos[todos.length - 1].id + 1;
    }
    */
    //console.log("oh add", title, desc);
    //let sno = todos[todos.length-1].sno + 1;
    const myTodo = {
      // id: Math.floor(Math.random()*10),
      id: uuid4(),
      image: image,
      title: title,
      desc: desc,
      category: category,
    }
    setTodos([...todos, myTodo])
    console.log(myTodo)
  }

  /*
   const handleEdit = (todo, editItem) => {
     console.log("edit this", todo);
     let edittodo = todos.find(item => item.id === todo);
     //showModal(!modal);
     //setTodos(edittodo.todos);
     console.log(edittodo);
     todo.image = edittodo;
     todo.title = edittodo;
     
     //setImage(todo.image)
     //setTitle(todo.title)
     //setDesc(todo.desc)
     //setCategory(todo.category)
     
     //let updatetodo = editItem 
     //setTodos(edittodo.map(item => item.id === todo))
 
   }
 */
  return (
    <>
      <AddToDo addList={addList} todos={todos} setTodos={setTodos} />
      <div>
        <div className='todolist__functions'>
          <div className='todolist__filter'>
            <button>Traditional</button>
            <button>Fast Food</button>
            <button>Sea Food</button>
            <button>Soup</button>
            <button>Drink</button>
          </div>
          <div className='todolist__sort'>
            Sort
          </div>
          <div className='todolist_search'>
            <input type="search" id="todosearch" name="todosearch" placeholder='Search' />
          </div>
        </div>
        <div className="todolist">
          {todos.map((item) => <ToDoItem todoitem={item} handleDelete={handleDelete} />)}
        </div>
      </div>
    </>
  );
}

export default ToDoWrapper;
