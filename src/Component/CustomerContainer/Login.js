import React, { useState } from "react";
import { useDispatch } from "react-redux";//value update purpose
import {login,logout} from './User';
import { useSelector } from "react-redux";

function Login() {
    const dispatch = useDispatch();
    const [name ,setName] = useState("")
    const [email ,setEmail] = useState("")
    const [password ,setPassword] = useState("")
    const user = useSelector(state => state.user.value)
  return (
    

    
    <div className="text-justify">
      {!user.name &&(
        <div className="text-justify">
          <lable >Enter Your name :</lable>
        <input value={name} onChange={(event)=>{ setName(event.target.value)}}/><br/>
           
        
        <lable>Enter Your email :</lable>
         <input type ="email" value={email} onChange={(event)=>{ setEmail(event.target.value)}}/>
           
        <br/>

        <lable>Enter Your password :</lable>
         <input type = "password" value={password} onChange={(event)=>{ setPassword(event.target.value)
        }}></input><br/>
        </div>
      )}
        
          
     {!user.name?
      <button onClick={()=>dispatch(login( {name,email,password}))}>  Login</button>:
      
      <button onClick={()=>dispatch(logout())}> Logout</button>
      }
     
    </div>
      );
    }
    
    export default Login;