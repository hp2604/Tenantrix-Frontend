import React from "react";
import { useSelector } from "react-redux";
const Dashboard=()=>{
    const user=useSelector((state)=>{ return state.user});
   
    return (
    <>
    <h2>{user.name}</h2>
    </>
    )
}

export default Dashboard;