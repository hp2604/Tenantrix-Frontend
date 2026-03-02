import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "../pages/Auth/Signup";
import Verification from "../pages/Auth/Verification";
import Login from "../pages/Auth/Login";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import ForgetPassword from "../pages/Auth/ForgetPassword";

const AppRoute=()=>{
    return(
    <>
    <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/verify" element={<Verification/>}/>
        <Route path='/forget' element={<ForgetPassword/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
    )
};
export default AppRoute;