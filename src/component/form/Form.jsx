import React,{useContext,useState} from 'react';
import {todoActions} from "../context/todo.reducer";
import { TodoContext } from '../context/TodoProvider';
import "../../App.css";
const Form = ({mode,setMode,formData,setFormData}) => {

    const { todos, todoDispatch } = useContext(TodoContext);
    const additem=(e)=>{
        e.preventDefault()
        //const formdata = new FormData(e.target);
        //const data =Object.fromEntries(formdata.entries());
       // setstate([...state,{...data,id:Math.random()*100}]);
       if(mode==="create"){
          // setstate([...state,{...formData,id: Math.floor(Math.random()*100)}]);
          todoDispatch({type:todoActions.add,payload:formData})
          //console.log(todos)
       }
       else{
          //console.log('jjjj')
          //console.log(formData)
          //setstate(state.map(item=>(item.id===formData.id ?formData : item)))
          todoDispatch({type:todoActions.update,payload:formData})
          
       }
       setFormData({
        id:Math.floor(Math.random()*1000),
        title:'',
        description:'',
       })
       setMode("create")
      }

      const handleInputs=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
       // console.log(formData)
      }
    return ( 
        <form onSubmit={additem} className="form">
            <lable>title:</lable>
            <input type="text" name='title' value={formData.title} onChange={handleInputs} className="inputs mr"></input>
            <lable>description:</lable>
            <input type="text" name='description' value={formData.description}
                onChange={handleInputs} className="inputs mr"></input>
            <button type={'submit'} className="btnSubmit">{mode==="create"?'Add':'Update'}</button>
        </form>
     );
}
 
export default Form;