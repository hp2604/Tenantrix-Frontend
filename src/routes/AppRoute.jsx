import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "../pages/Auth/Signup"
import AuthLayout from '../layout/AuthLayout';

const AppRoute=()=>{
    return(
    <>
    <Routes>
        <Route  element={<AuthLayout/>}>
        <Route path="/" element={<Signup/>} />
        </Route>
       
    </Routes>
    </>
    )
};
export default AppRoute;