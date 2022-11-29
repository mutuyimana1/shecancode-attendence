import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/home";
// import DashLayout from "../components/Dashboard/Layout"
import View from "../views/Dashboard/DashLayout";
// import AddStudent from "../components/AddStudent/AddStudent";
import Signin from "../components/Forms/Signin";
import AdminDashboard from "../views/Dashboard/AdminDashboard";
import Statistics from "../components/Statistics";
import Redux from "../components/redux/actionType";
import ReduxCounter from "../components/redux/ReduxCounter";
import Mentors from "../components/Mentors";
import SuperAdmin from "../views/Dashboard/SuperAdmin";
<<<<<<< HEAD
import StudentForm from "../views/Dashboard/StudentForm";
=======
import Addmentor from "../components/Addmentor";
>>>>>>> 1a77d441a0fe96b99beee415cc2b7e4728baac9c





const Index = () => {
  return (
    <>
<<<<<<< HEAD

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        {/* <Route path= "/Dashboard" element = {<View/>} /> */}
        <Route path="/signin" element={<Signin />} />
        {/* <Route path="/addstudent" element={<AddStudent/>}/> */}
        <Route path="/dashboard" element={<AdminDashboard />}>
          <Route path="" element={<Statistics />} />
          <Route path="students" element={<SuperAdmin />} />
          <Route path="counter" element={<ReduxCounter />} />
          <Route path="mentors" element={<Mentors />} />
          <Route path="StudentForm" element={<StudentForm />} />

        </Route>


      </Routes>

=======
    
    <Routes>
      <Route path= "/" element = {<Home/>} />
      <Route path= "home" element = {<Home/>} />
      {/* <Route path= "/Dashboard" element = {<View/>} /> */}
      <Route path= "/signin" element = {<Signin/>} />
      {/* <Route path="/addstudent" element={<AddStudent/>}/> */}
      <Route path="/dashboard" element={<AdminDashboard/>}>
      <Route path="" element={<Statistics />} />
        <Route path="students" element={<SuperAdmin/>} />
      <Route path ="counter" element={<ReduxCounter/>}/>
      
      <Route path="mentors" element={<Mentors/>}/>
      <Route path="Addmentor" element={<Addmentor/>}/>
 
      </Route>


    </Routes>
    
>>>>>>> 1a77d441a0fe96b99beee415cc2b7e4728baac9c
    </>
  )
}
export default Index;
