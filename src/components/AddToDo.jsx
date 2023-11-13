import React, { useState, useRef } from 'react'
import ToDoItem from './ToDoItem';
import uniqueId from 'lodash/uniqueId';
import "./AddToDo.scss"

/*
  const [form, setForm] = useState({
    image: "",
    title: "",
    desc: "",
    category: "",
  })
*/

const AddToDo = ({ todos, handleDelete, addList }) => {

  const [messageId] = useState(uniqueId('message-'));

  const hiddenFileInput = useRef(null);
  // const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [modal, showModal] = useState(false);

  const addTodo = (e) => {
    e.preventDefault();
    showModal();
    if (!title | !desc | !category) {
      alert("cant be blanked")
    } else {
      addList(title, desc, category)
      setTitle("");
      setDesc("");
      setCategory("");
    }
  }
  const handleImageChange = () => {

  }
  return (
    <>
      <div className='main-recipe'>
        <h1 className="recipe-heading">Add Your Recipe</h1>
        <button className="recipe-button" onClick={() => showModal(!modal)}>+</button>
        {
          modal && (
            <div className='popup'>
              <form className='popup__content' action="/action_page.php" onSubmit={addTodo}>
                <input className='popup__file' type="file" name="filename"
                  onChange={handleImageChange}
                  ref={hiddenFileInput}
                /> <br />
                <h1 style={{ marginTop: "2rem" }}> Title </h1>
                <input id={messageId} className='popup__title' type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} /> <br />
                <h1 style={{ marginTop: "2rem" }}>Description</h1>
                <textarea className='popup__desc' type="text" placeholder='Desc' value={desc} onChange={(e) => setDesc(e.target.value)} /> <br />
                <div className='popup__dropdown'>
                  <select name="foods" id="food" value={category} onChange={e => setCategory(e.target.value)}>
                    <option value="traditional">Choose a Category </option>
                    <option value="fast food">Fast Food</option>
                    <option value="sea food">Sea Food</option>
                    <option value="soup">Soup</option>
                    <option value="drinks">Drinks</option>
                  </select>
                </div>
                <br />
                <button className='popup__button' onClick={addTodo}>Submit</button>
                <button style={{ marginLeft: "1rem" }} className='popup__button' onClick={() => showModal()}>Close</button>
              </form>
            </div>
          )
        }
      </div >

      <div className='todolist'>
        {
          todos.map((item) => {
            return <ToDoItem key={messageId} todoitem={item} handleDelete={handleDelete} />
          })
        }
      </div>

    </>
  )
};

export default AddToDo;