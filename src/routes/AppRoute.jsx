import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "../pages/Auth/Signup";
import Verification from "../pages/Auth/Verification";
import Dashboard from "../pages/Dashboard";

const AppRoute=()=>{
    return(
    <>
    <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/verify" element={<Verification/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </>
    )
};
export default AppRoute;