import React,{useState} from 'react';
import Form from './form/Form';
import TodoList from './todo_list/TodoList';

const Home = () => {
    const [formData,setFormData]=useState({
        id:Math.floor(Math.random()*1000),
        title:'',
        description:'',

      });
    const[mode,setMode]=useState("create");
    return ( 
        <div>
           <Form mode={mode} setMode={setMode} formData={formData} setFormData={setFormData}/>
           <TodoList setMode={setMode} setFormData={setFormData}/>
        </div>

     );
}
 
export default Home;