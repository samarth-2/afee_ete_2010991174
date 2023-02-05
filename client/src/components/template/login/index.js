import './index.css';
import  { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Navbar from '../navbar';
import Axios from 'axios';

const Login = (props) => {
    const navigate=useNavigate();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");

    const [loginemail,setLoginemail]=useState("")
    const [loginpass,setLoginpass]=useState("")
    

function change(ele){
    
const container = document.getElementById('container');
    if(ele==="signup"){
        container.classList.add("right-panel-active");
    }
    if(ele==="signin"){
        container.classList.remove("right-panel-active");
    }
}

function signUpClicked()
  {

    console.log(name);
    let nameCheck=/^[A-Z a-z]+$/;
    if(nameCheck.test(name)===false)
    {
      alert("fill name correctly!!")
      return;
    }
    var emailCheck=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(emailCheck.test(email)===false)
    {
        alert("Email is incorrect");
        return;
    }
    else if(pass==="")
    {
      alert("fill pass correctly!!")
      return;
    }
    Axios.post('http://localhost:5000/api/post/sign-up',
    {
      name:name,
      email:email,
      pass:pass
    }).then((res)=>{
      if(res.data.message==="createdSuccess")
      {
        alert("Account Created Successfully!!!")
        console.log(res.data.data)
        props.LoggedInStatusCheck(true,res.data.data)
        navigate("/profile")
      }
      else if(res.data.message==="alreadyExist")
      {
        alert("Account Already Exists Please Login!!!")
      }
      document.getElementById("nameSignup").value="";
      document.getElementById("emailSignup").value="";
      document.getElementById("passSignup").value="";
      
      // document.getElementById("checkTest").;
    });
  }




function signInClicked()
  {
    if(loginemail==="" || loginpass==="")
    {
        alert("Email Or Password is Incorrect!!");
        return;
    }
    Axios.post('http://localhost:5000/api/post/sign-in',
    {
      email:loginemail,
      pass:loginpass
    }).then((res)=>{
      if(res.data.message==="loginSuccess")
      {
        alert("Login Successful!!!")
        console.log(res.data.data)
        props.LoggedInStatusCheck(true,res.data.data)
        navigate("/profile")
        document.getElementById("loginemail").value="";
        document.getElementById("loginpass").value="";
      }
      else if(res.data.message==="loginFailed")
      {
        alert("Email or Password Incorrect")
      }
      
      // document.getElementById("checkTest").;
    });
  }
  

    return (
        
      <div className='login_outer'>
        <Navbar/>
        <div className="login_container" id="container">
            <div className="form-container sign-up-container">
                <form className='login_form' action="#">
                    <h1>Create Account</h1>
                    
                    <input className='login_field' onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Name" id="nameSignup"/>
                    <input className='login_field' onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email" id="emailSignup" />
                    <input className='login_field' onChange={(e)=>{setPass(e.target.value)}} type="password" placeholder="Password" id="passSignup" />
                    <button className='login_button' type='button' onClick={()=>signUpClicked()}>Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form className='login_form' action="#">
                    <h1>Sign in</h1>
                    
                    <input className='login_field' onChange={(e)=>{setLoginemail(e.target.value)}} type="email" placeholder="Email" id="loginemail" />
                    <input className='login_field' onChange={(e)=>{setLoginpass(e.target.value)}} type="password" placeholder="Password" id="loginpass" />
                    <a className='login_link' href="#">Forgot your password?</a>
                    <button className='login_button' type='button' onClick={()=>signInClicked()}>Sign In</button>
                </form>
            </div>
            <div className="login_overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button   type='button' onClick={()=>change("signin")} className="login_button_ghost" id="signIn">Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button type='button' onClick={()=>change("signup")} className="login_button_ghost" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
      </div>


    );
}

export default Login;