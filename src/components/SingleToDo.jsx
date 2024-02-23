import React from 'react';
import { useParams } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
//import { deletehandler } from '../store/action/index';
//import { edithandler } from '../store/action/index';

const SingleToDo = ({ todos, setTodos, handleDelete }) => {
  //const state = useSelector(state => state.counter);
  //const dispatch = useDispatch()

  const todoid = useParams();
  const tododetails = todos.filter(item => item.id == todoid.id);
  console.log(tododetails);
  const todoitem = tododetails[0];
  console.log(todoitem);



  return (
      <div className='single-todo'>
        <img src={todoitem.image}  alt="" style={{width: "3rem"}}/>
        <h2>{todoitem.category}</h2>
        <h1>{todoitem.title}</h1>
        <p>{todoitem.desc}</p>
        <button>Edit</button>
        <button onClick={() => handleDelete(todoitem.id)}>Delete</button>
      </div>
  )
}

export default SingleToDo;