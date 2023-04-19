import { useSelector } from "react-redux";
import React from "react";

function Profile(){
    const user = useSelector(state => state.user.value)
   
    if(!user.name){
            return
    }
    return(
        <div >
        <h1>Profile information</h1>
        <h2>Name :{user.name}</h2>
        <h2>Email :{user.email}</h2>
        <h2>Password :{user.password}</h2>
        </div>
    )
}
export default Profile;