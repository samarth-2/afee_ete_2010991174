import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";import Axios from "axios";
import * as React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Login from './components/template/login/index'
import Home from './components/template/home/index'
import Profile from "./components/template/profile";
import Postprop from "./components/template/postProperty";
import Search from "./components/template/search";
import Listings from "./components/template/listings";
import Favourites from "./components/template/favourites";
import Admin from "./components/template/admin";






const App=(props)=>{
  
  const[LoggedIn,setLoggedIn]=React.useState("");
  const[LoggedInStatus,setLoggedInStatus]=React.useState(false);
  
  
  function LoggedInStatusCheck(x,data)
  {
    if(x==true)
    {
      setLoggedIn(data);
      setLoggedInStatus(x);
    }
  }


  const[showErrorLogin,setShowErrorLogin]=React.useState(0);
  const[loginEmail,setLoginEmail]=React.useState("")


  console.log(loginEmail)


  const[errModale,setErrModale]=React.useState("none");
  const[errText,setErrText]=React.useState('');




  const [valueBudget, setValueBudget] = React.useState([1, 50]);

  const [checkedAll, setCheckedAll] = React.useState(false);
  const [checked1bhk, setChecked1bhk] = React.useState(false);
  const [checked2bhk, setChecked2bhk] = React.useState(false);
  const [checked3bhk, setChecked3bhk] = React.useState(false);
  const [checked4bhk, setChecked4bhk] = React.useState(false);
  const [checked5bhk, setChecked5bhk] = React.useState(false);

  const [constructionCheckAll, setConstructionCheckAll] = React.useState(false);
  const [constructionCheckUnder, setConstructionCheckUnder] = React.useState(false);
  const [constructionCheckReady, setConstructionCheckReady] = React.useState(false);

  const [checkedTypeofAll, setCheckedTypeofAll] = React.useState(false);
  const [checkedTypeofFlat, setCheckedTypeofFlat] = React.useState(false);
  const [checkedTypeofIndependentFloor, setCheckedTypeofIndependentFloor] = React.useState(false);
  const [checkedTypeofIndependentHouse, setCheckedTypeofIndependentHouse] = React.useState(false);
  const [checkedTypeofResidentialLand, setCheckedTypeofResidentialLand] = React.useState(false);
  const [checkedTypeofFarm, setCheckedTypeofFarm] = React.useState(false);
  const [checkedTypeofServisedApart, setCheckedTypeofServisedApart] = React.useState(false);
  
  const[val,setVal]=React.useState("");
  const[valField,setValField]=React.useState("");



  function changeSetVal(x)
  {
    setVal(x)
  }
  function changeSetValField(x)
  {
    setValField(x)
  }
  
  function myStopFunction() 
  {
    setErrModale("none");
  }

  function changeErrDisplay(x)
  {
    setErrModale("flex");
    setErrText(x);
    setTimeout(myStopFunction, 3000);
  }
  




  // function changeLogin(x,check,email)
  // {
  //   if(x==true)
  //   {
  //     setLoginEmail(email);
  //     setLogin(1);
  //     changeErrDisplay("Login Success");
  //     if(check==="dealer")
  //     {
  //       setLoginTypeCheck({dealer:1,buyer:0})
  //     }
  //     else
  //     {
  //       setLoginTypeCheck({dealer:0,buyer:1})
  //     }
      
  //   }
  //   else
  //   {
  //     changeErrDisplay("Login Failed");
  //     setShowErrorLogin(1);
  //   }
  // }









  function handleChangeCheckbox(x,check)
  {
      switch(x) {
          case 0:
              setChecked1bhk(check);
            break;
          case 1:
              setChecked2bhk(check);
              break;
          case 2:
              setChecked3bhk(check);
              break
          case 3:
              setChecked4bhk(check);
              break;
          case 4:
              setChecked5bhk(check);
              break;
          default:
            console.log("fuck u")
        }
  }
  
  
  
  function handleChangeCheckboxConstruction(x,check)
  {
      switch(x) {
          case 0:
              setConstructionCheckUnder(check);
            break;
          case 1:
              setConstructionCheckReady(check);
              break;
          default:
            console.log("fuck u")
        }
  }
  
  
  
  function handleChangeCheckboxTypeof(x,check)
  {
      switch(x) {
          case 0:
              setCheckedTypeofFlat(check);
            break;
          case 1:
              setCheckedTypeofIndependentFloor(check);
              break;
          case 2:
              setCheckedTypeofIndependentHouse(check);
              break;
          case 3:
              setCheckedTypeofResidentialLand(check);
              break;
          case 4:
              setCheckedTypeofFarm(check);
              break;
          case 5:
              setCheckedTypeofServisedApart(check);
              break;
          default:
            console.log("fuck u")
        }
  }
  
  
  const handleChangeSlider = (event, newValue) => {
      setValueBudget(newValue);
    };













    return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/home" 
        element={<Home LoggedIn={LoggedIn} LoggedInStatus={LoggedInStatus} 
        errText={errText} changeErrDisplay={changeErrDisplay}
        // changeLogin={changeLogin} 
        // login={login} 
        showErrorLogin={showErrorLogin}
        valueBudget={valueBudget}
        handleChangeSlider={handleChangeSlider}
        handleChangeCheckboxTypeof={handleChangeCheckboxTypeof}
        handleChangeCheckboxConstruction={handleChangeCheckboxConstruction}
        // handleChangeCheckbox={handleChangeCheckbox}
        changeSetVal={changeSetVal}
        changeSetValField={changeSetValField}
        val={val}
        valField={valField}
        // checkArr={[checked1bhk,checked2bhk,checked3bhk,checked4bhk,checked5bhk]}
        constructionArr={[constructionCheckAll,constructionCheckUnder,constructionCheckReady]}
        typeofArr={[checkedTypeofAll,checkedTypeofFlat,checkedTypeofIndependentFloor,checkedTypeofIndependentHouse,checkedTypeofResidentialLand
                    ,checkedTypeofFarm,checkedTypeofServisedApart]}
          />}>

        </Route>
       <Route path="/profile"
        element={<Profile    LoggedIn={LoggedIn} LoggedInStatus={LoggedInStatus} />}>

        </Route>
        <Route path="/postproperty"
        element={<Postprop    LoggedIn={LoggedIn} LoggedInStatus={LoggedInStatus} />}>

        </Route>

        <Route path="/search"
        element={<Search    
        LoggedIn={LoggedIn} 
        LoggedInStatus={LoggedInStatus} 
        showErrorLogin={showErrorLogin}
        valueBudget={valueBudget}
        handleChangeSlider={handleChangeSlider}
        handleChangeCheckboxTypeof={handleChangeCheckboxTypeof}
        handleChangeCheckboxConstruction={handleChangeCheckboxConstruction}
        handleChangeCheckbox={handleChangeCheckbox}
        val={val}
        valField={valField}
        checkArr={[checked1bhk,checked2bhk,checked3bhk,checked4bhk,checked5bhk]}
        constructionArr={[constructionCheckUnder,constructionCheckReady]}
        typeofArr={[checkedTypeofFlat,checkedTypeofIndependentFloor,checkedTypeofIndependentHouse,checkedTypeofResidentialLand
        ,checkedTypeofFarm,checkedTypeofServisedApart]}
        />}>

        </Route>

        <Route path="/listings"
        element={<Listings    LoggedIn={LoggedIn} LoggedInStatus={LoggedInStatus} />}>

        </Route>
        <Route path="/favourites"
        element={<Favourites    LoggedIn={LoggedIn} LoggedInStatus={LoggedInStatus} />}>

        </Route>

        <Route path="/admin"
        element={<Admin    LoggedIn={LoggedIn} LoggedInStatus={LoggedInStatus} />}>

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
