import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";import Axios from "axios";
import { useState,useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Login from './components/template/login/index'
import Home from './components/template/home/index'
import Profile from "./components/template/profile";
import Postprop from "./components/template/postProperty";








const App=(props)=>{
  
  const[LoggedIn,setLoggedIn]=useState("");
  const[LoggedInStatus,setLoggedInStatus]=useState(false);
  
  
  function LoggedInStatusCheck(x,data)
  {
    if(x==true)
    {
      setLoggedIn(data);
      setLoggedInStatus(x);
    }
  }














    return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/home" 
            element={<Home LoggedIn={LoggedIn} LoggedInStatus={LoggedInStatus} />}>

        </Route>
       <Route path="/profile"
        element={<Profile    LoggedIn={LoggedIn} LoggedInStatus={LoggedInStatus} />}>

        </Route>
        <Route path="/postproperty"
        element={<Postprop    LoggedIn={LoggedIn} LoggedInStatus={LoggedInStatus} />}>

        </Route>
        <Route path="/login" 
        
        element={<Login 
          LoggedIn={LoggedIn}
          LoggedInStatusCheck={LoggedInStatusCheck}
          LoggedInStatus={LoggedInStatus}
        
        
        />}>


        </Route>
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
    </>
  );
   
}

export default App;
