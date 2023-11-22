import React from 'react';
import { useParams } from 'react-router-dom';

const SingleToDo = ({ todos, handleDelete }) => {

  const todoid = useParams();
  const tododetails = todos.filter(item => item.id == todoid.id);
  const todo = tododetails[0];
  console.log(todo);
  
  return (
    <div>
      <img src={todo.image} alt="" />
      <h1>{todo.title}</h1>
      <p>{todo.desc}</p>
      <button className='todoitem__button'>Edit</button>
      <button onClick={()=>handleDelete(todo)}>Delete</button>
    </div>
  )
}

export default SingleToDo;