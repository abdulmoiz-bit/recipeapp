import React from 'react'
import "./ToDoItem.scss"

const ToDoItem = ({todoitem, handleDelete}) => {

  return (
    <div className="todoitem">
      <img className='todoitem__image' src="" alt="" />
      <h2 className='todoitem__category-heading'>{todoitem.category}</h2>
      <h1 className='todoitem__title'>{todoitem.title}</h1>
      <p className='todoitem__desc'>{todoitem.desc}</p>
      <button className='todoitem__button' onClick={()=>handleDelete(todoitem)} >Delete</button>
      <button className='todoitem__button'>Edit</button>
    </div>
  
  )
}

export default ToDoItem