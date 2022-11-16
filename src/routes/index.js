import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "../views/home";
// import DashLayout from "../components/Dashboard/Layout"
import View from "../views/Dashboard/DashLayout"



const Index = () =>{
  return(
    <>
    <Routes>
      <Route path= "/" element = {<Home/>} />
      <Route path= "home" element = {<Home/>} />
      <Route path= "/Dashboard" element = {<View/>} />

    </Routes>
    
    </>
  )
}
export default Index;
