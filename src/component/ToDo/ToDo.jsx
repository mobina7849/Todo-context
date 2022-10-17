import React from "react";
import './Todo.style.css'
const ToDo =({todo,onClick,onClickUpdate}) =>{
    return(
        <div className="card">
            <h1>{todo.id}</h1>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <button onClick={onClick} className="btnDelete">delete me</button>
            <button onClick={onClickUpdate} className="btnUpdate">update me</button>

        </div>
    )
}

export default ToDo 