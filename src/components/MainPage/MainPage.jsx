import React, { useState } from 'react'
import './Mainpage.css';

function MainPage() {
  const [toDo, setTodo] = useState('');
  const [toDos, setTodos] = useState([]);


  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>

      {/*........... input box to add the todos................................. */}
      <div className="input">
        <input value={toDo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setTodos([...toDos, { text: toDo, status: false, key: Date.now(), active:true }])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((todoValue) => {
            return (
            todoValue.active && <div className="todo" key={todoValue.key}>
              <div className="left">
                <input type="checkbox" value={todoValue.status} onChange={(e)=>{
                  toDos.filter((todoFilter)=>{
                    console.log("checked before click"+e.target.checked);
                    if(todoFilter.key===todoValue.key){
                      todoFilter.status=e.target.checked
                    }
                    
                    return todoFilter
                    
                  })
                  setTodos([...toDos])
                }}/>
                {todoValue.status?<p className='linethrough'>{todoValue.text}</p>:<p>{todoValue.text}</p>}
              </div>
              <div className="right">
                <i onClick={()=>{
                  toDos.filter((e)=>{
                    if(e.key===todoValue.key){
                      e.active=false
                    }
                    setTodos([...toDos])
                    return e
                  })
                }} className="fa fa-trash" aria-hidden="true"></i>
              </div>
            </div>)
          })
        }
      </div>
    </div>
  )
}

export default MainPage
