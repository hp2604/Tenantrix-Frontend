import React from "react";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";

const NotFound=()=>{
    const navigate=useNavigate();
    const redirectLogin =()=>{
        navigate("/login")
    }
    return(
    <>
    <div id="container">
       <div id="card">
        <h1 id="title"> 404</h1>
        <h2 id="sub-title">Oops! The page you're looking for doesn't exist.</h2>
        <button id="home-button" onClick={()=>redirectLogin()}> Return Login</button>
       </div>
    </div>
    </>
)
}

export default NotFound;