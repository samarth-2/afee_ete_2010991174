import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";import Axios from "axios";
import { useState,useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Login from './components/template/login/index'
import Home from './components/template/home/index'
import Profile from "./components/template/profile";
const App=(props)=>{
  
    return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
       <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
    </>
  );
   
}

export default App;
