"use client"
import {useState} from "react";
const AddTodo=()=>{
  const[todo,setTodo]= useState();
  const handleFormSubmit=(e:FormEvent<HTMLFormElement>)=>{ 
    e.preventDefault();
    handleAddTodo(todo);
    setTodo(value:"");
  }
  return(
    
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Write your todo" name="" value={todo} onChange={(event)=>setTodo(event.target.value)} />
       <button type="submit" >ADD</button>
      </form>
  
  );
};
export default AddTodo;