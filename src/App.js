

import './App.css';
import Header from './mycomponent/Header';
import { AddTodos } from './mycomponent/AddTodos';
import Todos from './mycomponent/Todos';
import Footer from './mycomponent/footer';
import { useState } from 'react';





function App() {

  const onDelete =(todo)=> {
    console.log("i am onDelete of todo", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo
    }))
  }

  const addTodo = (title,desc)=>{
    console.log("i am adding todo",title,desc);
  }
  const[todos,setTodos] = useState([
    {
      sno:1,
      title:"go to the market",
      desc: "you need to buy vegis"
    },
    {
      sno:2,
      title:"go to the gym",
      desc: "you need to workout"
    },
    {
   
      sno:3,
      title:"go to the office",
      desc: "you need to work" 
    }
    
  ]);
  
  return (
    <>
    <Header title ="Kunal Todos"  listOptions = {true}/>
    <AddTodos addTodos = {addTodo}/>
    <Todos todos={todos} onDelete={onDelete} />
    {/* <Footer/>  */}
    </>
  );
}

  export default App;


