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
        <input value={toDo} onChange={(e) => {
            setTodo(e.target.value)
          }
        } type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => {
          if (toDo!=='') {
            setTodos([...toDos, { text: toDo, status: false, key: Date.now(), active:true }])
            setTodo('')
          }else{
            alert("please enter some tasks")
          }
        }} className="fas fa-plus"></i>
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
    {/* .......................delete button.................................... */}
              <div className="right">
                <i 
        // element deletion using filer method        
                // onClick={()=>{
                //   toDos.filter((e)=>{
                //     if(e.key===todoValue.key){
                //       e.active=false
                //     }
                //     setTodos([...toDos])
                //     return e
                //   })
                // }} 

      //  delete using array splice         
                onClick={()=>{
                  const index = toDos.indexOf(todoValue)
                  toDos.splice(index, 1) 
                  setTodos([...toDos])
                }}
                className="fa fa-trash" aria-hidden="true"></i>
              </div>
  {/* '''/.''''''''''''''''''''''''''''''''''''''''''' */}
            </div>)
          })
        }
      </div>
    </div>
  )
}

export default MainPage
