import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos  from './MyComponents/Todos'; 
import AddTodo from "./MyComponents/AddTodo";
import React , {useState, useEffect} from 'react';
import About from "./MyComponents/About";

import { cleanup } from '@testing-library/react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() { 

  

  const onDelete = (todo)=>{
    console.log("I am on Delete of todo",todo)
    setTodods(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.setItem("todos",JSON.stringify(todos)); // convert Javascript objects into Strings
  }


  const addTodo = (title,desc)=>{
    console.log("I am adding todo",title,desc);
    let sno;
    if(todos.length === 0){
      sno = 0;
    }
    else{
     sno = todos[todos.length-1].sno+1;
    }
    const myTodo = {
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodods([.todos,myTodo]);  // update the todos. We make a ...(array)
    console.log(myTodo);
  }

  const[todos,setTodods]= useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.(todos));
    // return()=>{
    //   cleanup
    // }
  },[todos]);
return (
  <>
    <Router>
      <Header title="My Todods List" searchBar={false} />
      <Routes>
        <Route  path="/" element= {
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
        }  />
        <Route  path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  </>
     );
      }
export default App;
