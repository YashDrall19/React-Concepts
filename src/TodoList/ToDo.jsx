import React, { useState } from 'react'
import './todo.css'
export default function ToDo() {

    let[todoList, setTodoList] = useState([])

    let addTask = (e) => {
        let newTask = e.target.input.value;
        if(newTask.trim===''){
            alert('Enter a task!');
        } else if(!todoList.includes(newTask)) {
            let List = [...todoList, newTask]
            setTodoList(List);
            console.log(List);
        } else {
            alert('Task already exists!');
        }
        
        e.preventDefault();
        e.target.reset();
    }

    let deleteItem = (index) => {
        let List = todoList.filter((_,i)=>i!==index)
        setTodoList(List)
    }

  return (
    <div className='todo'>
        <h1>ToDo List</h1>

        <form className="input" onSubmit={addTask}>
            <input type="text" name='input' />
            <button>Add</button>
        </form>

        <div className="list">
            <ul>
                {todoList.map((t,i) => {
                    return(
                        <li key={i}>{t}<span className='cross' onClick={() => deleteItem(i)}>&times;</span></li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}
