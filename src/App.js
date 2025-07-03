

import './App.css';
import Header from './mycomponent/Header';
import Todos from './mycomponent/Todos';
import Footer from './mycomponent/footer';





function App() {

  let todos =[
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
    
  ]
  
  return (
    <>
    <Header title ="Kunal Todos"  listOptions = {true}/>
    <Todos  todos={todos}/>
    <Footer/> 
    </>
  );
}

  export default App;


