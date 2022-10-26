import { useState } from 'react';
import logo from "./logo.svg";
import "./App.css";



function App() {
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState([]);
  const [count, setCount] = useState(3)


  const handleOnchangeInputTodo = (event) => {
    const { value } = event.target;
    setTodo(value)

  }

  const submitTodoList = (event) => {
    event.preventDefault();
    if (todo.trim().length <= 0) {
      return;
    }

    const newListTodo = [...listTodo];
    newListTodo.push(todo);

    setListTodo(newListTodo)
    setCount(count + 1);

    setTodo("")
  }

  const [isShowAtInput, SetIsShowAtInput] = useState(true);
  const [isShowAtSearch, setIsShowAtSearch] = useState(false);

  const showAddNew = () => {
    SetIsShowAtInput(!isShowAtInput);
    if (isShowAtSearch === true) {
      setIsShowAtSearch(false);
    }

  }

  const showSearch = () => {
    setIsShowAtSearch(!isShowAtSearch);
    if (isShowAtInput === true) {
      SetIsShowAtInput(false);
    }
  }



  return (
    <div className="App">

      <div className="container-board">
        <div className="board">
          <div className="title">
            THINGS TO DO
          </div>
          <form onSubmit=
            {submitTodoList}>
            {(isShowAtInput) && <div className="input-box">
              <input
                name="input-todo"
                type="text"
                className="input"
                placeholder="Add New"
                onChange={handleOnchangeInputTodo}
                value={todo}
              />

            </div>}

            {/* // Show list  */}
            {listTodo.map((item, idx) => {
              return <div className='newCard'> <input type="checkbox" className='checkBox' />
                <li className='addnew' key={idx}>{item}

                </li>
              </div>
            })}
          </form>
          <form onSubmit=
            {submitTodoList}>
            {(isShowAtSearch) && <div className="input-box">
              <input
                name="input-todo"
                type="text"
                className="input"
                placeholder="Search"
                onChange={handleOnchangeInputTodo}
                value={todo}
              />

            </div>}


          </form>
          <div>
            <div className='todoList'>
              <input type="checkbox" className='checkBox' />
              Learn Javascript
            </div>
            <div className='todoList'>
              <input type="checkbox" className='checkBox' />
              Learn React
            </div>
            <div className='todoList'>
              <input type="checkbox" className='checkBox' />
              Build a React App

              {/* {isShowAtInput && <div> SHOW NE </div>} */}
            </div>
            <div className='footer'>
              <div className='left-footer'>
                <div className='container-icon'>
                  <div className='add-new' onClick={showAddNew}>
                    {/* {isShowAtInput ? } */}

                  </div>
                  <div className='search' onClick={showSearch}></div>
                </div>
              </div>
              <div className='right-footer'> {count} items left </div>
            </div>
          </div>
        </div>


      </div>

    </div>
  );
}

export default App;
