import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "../views/home";
// import DashLayout from "../components/Dashboard/Layout"
import View from "../views/Dashboard/DashLayout"
import Signin from "../components/Forms/Signin";




const Index = () =>{
  return(
    <>
    
    <Routes>
      <Route path= "/" element = {<Home/>} />
      <Route path= "home" element = {<Home/>} />
      <Route path= "/Dashboard" element = {<View/>} />
      <Route path= "/signin" element = {<Signin/>} />

    </Routes>
    
    </>
  )
}
export default Index;
