import React from "react";
import { Route, Routes } from "react-router-dom";
import StudentForm from "../Pages/StudentForm";
import StudentList from "../Pages/StudentList";


const Routers = () => {
  return (
    
    <Routes>
    
      <Route path="/" element={<StudentForm/>} />
      <Route path="/StudentList" element={<StudentList />} />
      <Route path="/StudentForm" element={<StudentForm/> }/>

     

    </Routes>
  );
};

export default Routers;