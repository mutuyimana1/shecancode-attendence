import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/home";
// import DashLayout from "../components/Dashboard/Layout"
import View from "../views/Dashboard/DashLayout";
// import AddStudent from "../components/AddStudent/AddStudent";
import Signin from "../components/Forms/Signin";
import AdminDashboard from "../views/Dashboard/AdminDashboard";



const Index = () =>{
  return(
    <>
    
    <Routes>
      <Route path= "/" element = {<Home/>} />
      <Route path= "home" element = {<Home/>} />
      <Route path= "/Dashboard" element = {<View/>} />
      <Route path= "/signin" element = {<Signin/>} />
      {/* <Route path="/addstudent" element={<AddStudent/>}/> */}
      <Route path="/dashboard" element={<AdminDashboard/>}/>

    </Routes>
    
    </>
  )
}
export default Index;
