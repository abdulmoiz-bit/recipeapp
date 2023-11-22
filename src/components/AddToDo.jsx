import React, { useState } from 'react'
import "./AddToDo.scss";
import ToDoItem from './ToDoItem';
//import uniqueId from 'lodash/uniqueId';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { fasort } from '@fortawesome/free-solid-svg-icons'

/*
  const [form, setForm] = useState({
    image: "",
    title: "",
    desc: "",
    category: "",
  })
*/

const AddToDo = ({ addList, todos, handleDelete}) => {

  //const [messageId] = useState(uniqueId('message-'));

  //const hiddenFileInput = useRef(null);
  const [image, setImage] = useState("");
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
      addList(image, title, desc, category)
      setImage("");
      setTitle("");
      setDesc("");
      setCategory("");
    }
  }
  const handleImageChange = (e) => {
    let file = e.target.files[0];
    const imgname = e.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(file);
    setImage(file);
    console.log(imgname)
  }

  
  const handleEdit = (todo) => {
    console.log("edit this", todo)
    //let edittodo = todos.find(item => item.id === todo );
    //console.log(edittodo);
    //showModal(!modal); 
    //setImage(todo.image) 
    //setTitle(todo.title)
    //setDesc(todo.desc)
    //setCategory(todo.category)
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

                <div onChange={handleImageChange}>
                {image ? <img src={URL.createObjectURL(image)} alt='' style={{ height: "3rem" }} /> : ""}
                <input className='popup__file' type="file" name="filename"/>
                </div>

                <br />
                <h1 style={{ marginTop: "2rem" }}> Title </h1>
                <input className='popup__title' type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} /> <br />

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

      </div>
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
            return <ToDoItem todoitem={item} handleDelete={handleDelete} handleEdit={handleEdit}/>
          })
          }
        </div>
      </div>
    </>
  )
};

export default AddToDo;