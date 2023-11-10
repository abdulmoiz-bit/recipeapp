import React, { useState } from 'react'
import ToDoItem from './ToDoItem';
import "./AddToDo.scss"

const AddToDo = ({ todos, handleDelete, addList }) => {

  //const [image, setImage] = useState();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  //const [category, setCategory] = useState("");
  const [modal, showModal] = useState(false);

  const [form, setForm] = useState({
    image: "",
    title: "",
    desc: "",
    category: "",
  })

  const addTodo = (e) => {
    e.preventDefault();
    if (!title | !desc) {
      alert("cant be blanked")
    } else {
      addList(title, desc)
      setTitle("");
      setDesc("");
    }
  }
  /*
  const handleClick = () => {
    addTodo;
    showModal();
  }
*/
  return (
    <>
      <div className='main-recipe'>
        <h1 className="recipe-heading">Add Your Recipe</h1>
        <button className="recipe-button" onClick={() => showModal(!modal)}>+</button>
        {
          modal && (
            <div className='popup'>
              <form className='popup__content' action="/action_page.php" onSubmit={addTodo}>
                <input className='popup__file' type="file" id="myfile" name="filename" /> <br />
                <h1 style={{marginTop: "2rem"}}>Title</h1>
                <input className='popup__title' type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} /> <br />
                <h1 style={{marginTop: "2rem"}}>Description</h1>
                <textarea className='popup__desc' type="text" placeholder='Desc' value={desc} onChange={(e) => setDesc(e.target.value)}/ > <br/>
                <div className='popup__dropdown'>
                <label for="food">Choose a Category</label>
                <select name="foods" id="food">
                  <option value="traditional">Traditional</option>
                  <option value="fast food">Fast Food</option>
                  <option value="sea food">Sea Food</option>
                  <option value="soup">Soup</option>
                  <option value="drinks">Drinks</option>
                </select>
                </div>
                <br />
                <button className='popup__button' onClick={addTodo}>Submit</button>
                <button style={{marginLeft: "1rem"}}  className='popup__button' onClick={() => showModal()}>Close</button>
              </form>
            </div>
          )
        }
      </div >

      <div className='todolist'>
        {
          todos.map((item) => {
            return <ToDoItem key={item.id} todoitem={item} handleDelete={handleDelete} />
          })
        }
      </div>

    </>
  )
}

export default AddToDo;