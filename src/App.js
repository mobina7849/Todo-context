//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Home from './component/Home';
import ToDo from './component/ToDo/ToDo';
import TodoProvider from './component/context/TodoProvider'
//database
//const { todos, todoDispatch } = useContext(TodoContext);



function App() {
 // const [state ,setstate]=useState(todos);






  return (

    <div className='container'>
      <TodoProvider>
        <Home/>
      </TodoProvider>
   
    </div>
  );
}

export default App;
