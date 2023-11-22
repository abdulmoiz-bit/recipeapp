import React from 'react'
import ToDoItem from './ToDoItem'
import "./ToDos.scss";

const ToDos = ({todos, handleDelete}) => {
  return (
    <div className='todolist'>
      <div className='todolist__functions'>
        <div className='todolist_search'>
          <form action="/action_page.php">
            <input type="search" id="gsearch" name="gsearch" />
          </form>
        </div>
        <div className='todolist__sort'>

        </div>
        <div className='todolist__filter'>

        </div>
      </div>
      <div className='todolist__items'>
        {todos.map((item) => {
          return <ToDoItem todoitem={item} handleDelete={handleDelete} />
        })
        }
      </div>
    </div>
  )
}

export default ToDos;
