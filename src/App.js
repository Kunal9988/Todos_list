

import './App.css';
import Header from './mycomponent/Header';
import { AddTodos } from './mycomponent/AddTodos';
import Todos from './mycomponent/Todos';
import Footer from './mycomponent/footer';
import { useState } from 'react';





function App() {
  let initTodo; 
  if (localStorage.getItem("todos")===null){
     initTodo = []

  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
    
    
     

  const onDelete =(todo)=> {
    console.log("i am onDelete of todo", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo
    }));

    localStorage.setItem("todos",JSON.stringify(todos)); 
  }

  const addTodo = (title,desc)=>{
    console.log("i am adding todo",title,desc);
    let sno; 
    if(todos.length === 0){
      sno = 1;
    }
    else{
       sno = todos[todos.length -1].sno + 1;
    }
     
    const myTodo ={
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);


  
   localStorage.setItem("todos",JSON.stringify(todos));
      
    
    
  }
  const[todos,setTodos] = useState([initTodo]);
  
  return (
    <>
    <Header title ="Kunal Todos"  listOptions = {true}/>
    <AddTodos addTodos = {addTodo}/>
    <Todos todos={todos} onDelete={onDelete} />
    <Footer/> 
    </>
  );
}

  export default App;


