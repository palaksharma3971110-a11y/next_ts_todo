import AddTodo from "./Components/add-todo";
import Todos from "./Components/todos";
import Navbar from "./Components/navbar";
import "./globals.css";
import {RiTodoLine} from "react-icons/ri";  
const Page=()=>{
  return(
    <main>
<h2><RiTodoLine className="icons"/>TODO NEXT + TYPESCRIPT<RiTodoLine className="icons"/></h2>
<Navbar/>
<AddTodo />
<Todos/>
    </main>
  );
};
export default Page;