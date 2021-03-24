import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header";
import React from "react";
import Routes from "./routes";

function App() {

    const [name,setName]=React.useState([{name:'Ram',rollNo:'10',isGirl:false}])
    // setTimeout(function (){setName([{name:'Sita',rollNo:'11',isGirl:true}])},3000)
  return (
    <div className="App">
      <Routes  />
    </div>
  );
}

export default App;
