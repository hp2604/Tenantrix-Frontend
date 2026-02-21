import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "../pages/Auth/Signup";
import Verification from "../pages/Auth/Verification";

const AppRoute=()=>{
    return(
    <>
    <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/verify" element={<Verification/>}/>
    </Routes>
    </>
    )
};
export default AppRoute;