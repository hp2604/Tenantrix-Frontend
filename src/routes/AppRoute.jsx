import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "../pages/Auth/Signup";
import Verification from "../pages/Auth/Verification";
import Login from "../pages/Auth/Login";
import Dashboard from "../pages/Dashboard";

const AppRoute=()=>{
    return(
    <>
    <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/verify" element={<Verification/>}/>
    </Routes>
    </>
    )
};
export default AppRoute;