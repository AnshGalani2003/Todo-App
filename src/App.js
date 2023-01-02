import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Todos from "./components/Todos.jsx";

function App() {
  //   let [name,setName]=useState("Ansh"); // hook
  //   let [age,setAge]=useState(30);

  //   let [number,setNumber]=useState(0);

  //   // if(name==="Ansh"){
  //   //   let [Ansh,setNam]=useState();
  //   // }

  //  const onClick=()=>{
  //     setNumber(number+1);
  //   }

  //   setTimeout(()=>{
  //     //console.log("settimeout called");
  //     setName("Shiv");
  //     setAge(50);
  //   },2000);

  return (
    <div className="App">
      {/* <h1>{number}</h1>
     <h1>Name:{name} </h1>
     <h1>Age:{age} </h1>
     <button onClick={onClick}>Click</button> */}
      <h1 style={{ color: "#009B77" }}>ToDo App</h1>
      <Todos />
    </div>
  );
}

export default App;
