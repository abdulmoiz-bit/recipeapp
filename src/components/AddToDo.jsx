import React, { useState } from 'react'
import "./AddToDo.scss";
//import ToDoItem from './ToDoItem';
//import ToDos from './ToDos';
//import uniqueId from 'lodash/uniqueId';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AddToDo = ({ addList }) => {


  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [modal, showModal] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };


  const addTodo = (e) => {
    e.preventDefault();
    showModal();
    if (!title | !desc | !category) {
      alert("cant be blanked")
    } else {
      addList(image, title, desc, category);
      setImage("");
      setTitle("");
      setDesc("");
      setCategory("");
    }
  }


  return (
    <>
      <div className='main-recipe'>
        <h1 className="recipe-heading">Add Your Recipe</h1>
        <button className="recipe-button" onClick={() => showModal(!modal)}>
          Add
        </button>
        {
          modal && (
            <div className='popup'>
              <form className='popup__content'>
                {image && <img src={image} alt='' style={{ height: "3rem", width: "3rem" }} />}
                <input className='popup__file' type="file" name="filename" onChange={handleImageChange} />
                <br />
                <h1 style={{ marginTop: "2rem" }}> Title </h1>
                <input className='popup__title' type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} /> <br />

                <h1 style={{ marginTop: "2rem" }}>Description</h1>
                <textarea className='popup__desc' type="text" placeholder='Desc' value={desc} onChange={(e) => setDesc(e.target.value)} /> <br />
                <div className='popup__dropdown'>
                  <select name="foods" id="food" value={category} onChange={e => setCategory(e.target.value)}>
                    <option value="choose">Choose a Category </option>
                    <option value="traditional"> Traditional </option>
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
      </div>
    </>
  )
};

export default AddToDo;