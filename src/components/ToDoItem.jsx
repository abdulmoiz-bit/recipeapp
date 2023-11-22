import React from 'react'
import "./ToDoItem.scss"
//import { NavLink } from 'react-router-dom'


const ToDoItem = ({todoitem, handleDelete}) => {



  return (
    <div className="todoitem">
      <img className='todoitem__image' src={todoitem.image} alt="" />
      <h2 className='todoitem__category-heading'>{todoitem.category}</h2>
      <h1 className='todoitem__title'>{todoitem.title}</h1>
      <p className='todoitem__desc'>{todoitem.desc.slice(0, 200)}...</p>
      <button className='todoitem__button'>Edit</button>
      <button onClick={()=>handleDelete(todoitem)}>Delete</button>
      <a href={`/todo/${todoitem.id}`}>View</a>
    </div>
  
  )
}

export default ToDoItem