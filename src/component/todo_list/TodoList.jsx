
import ToDo from '../ToDo/ToDo';
import React,{useContext} from 'react';
import { TodoContext } from '../context/TodoProvider';
import {todoActions} from "../context/todo.reducer";
const TodoList = ({setMode,setFormData}) => {
    const { todos, todoDispatch } = useContext(TodoContext);
    const deleteitem=(id)=>{
        //setstate(state.filter((item)=>item.id !==id))
        todoDispatch({type:todoActions.delete,payload:{id:id}})
      }
      const handleSelectForUpdate=(todo)=>{
        setFormData(todo);
        setMode("update")
      }
    return ( 
     <div className='cards'>
        {todos.map((todo)=>(
        <ToDo key={todo.id}
        todo={todo}
        onClick={()=>deleteitem(todo.id)}
        onClickUpdate={()=>handleSelectForUpdate(todo)}
        />
        ))}
     </div>
     );
}
 
export default TodoList;