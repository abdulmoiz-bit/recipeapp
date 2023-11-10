import React from 'react'
//import ToDoItem from './ToDoItem'

const ToDos = (todos, handleDelete) => {
  return (
    <div>
      {todos.map((item) => {
        return <ToDoItem key={item.id} todo={item} handleDelete={handleDelete} />
      })}
    </div>
  )
}

export default ToDos;
