import React, { useEffect, useState } from "react";
import "./Verification.css";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import Inputs from "../../../components/Inputs";
import { useFormik } from "formik";
import { Otp } from "../../../schema";
import { useNavigate, useSearchParams } from "react-router-dom";
const Verification =()=>{
    const [searchParams]=useSearchParams();
    const navigate=useNavigate();
    useEffect(()=>{
        const token = searchParams.get("token");
        if(!token){
            navigate("/signup")
        }
    },[])
    const initialValue={
        otp:""
    }
    const{values, errors, touched , handleChange , handleSubmit}=useFormik({
        initialValues : initialValue,
        validationSchema:Otp,
        onSubmit:(values)=>{

        }
    })
    return(
    <>
    <div className="container">
        {/* <div className="card">
            <div className="title">
                <h3>Verify Otp</h3>
            </div>
            <form action="">
                <input 
                className="suc"
                type="number" 
                name="otp"
                placeholder="Enter Otp" 
                />
                <Button text={"verify"} type={"submit"}/>
            </form>
        </div> */}
        <Card type={"vertical"} title={"Verify Code"}>
             <form action="" onSubmit={handleSubmit}>
               <Inputs type={'number'} varient={"normal"} name={'otp'} placeholder={"Enter OTP"} value={values.otp} handleChange={handleChange} />
               { errors.otp && touched.otp ? <div className="error-message">{errors.otp} </div>: null }
               <Button text={"Verify"} type={"submit"} />
            </form>
        </Card>
    </div>
    </>
);

}

export default Verification;