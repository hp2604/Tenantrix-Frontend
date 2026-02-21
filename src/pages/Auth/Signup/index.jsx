import React, { useState } from "react";
import "./Signup.css";
import { useFormik } from "formik";
import { SignUpSchema } from "../../../schema";
import Inputs from "../../../components/Inputs";
import Button from "../../../components/Button";
import Card from "../../../components/Card";


const Signup = () => {
  const {loading,setLoading}=useState(false);
  const initialValues={
    FullName:"",
    email :"",
    password:"",
    organization:""
  }
const{values,errors,touched,handleSubmit,handleChange}=  useFormik({
    initialValues:initialValues,
    validationSchema:SignUpSchema,
    onSubmit :(values ,actions)=>{

    }
  }) 


  return (
    <div className="container">
      {/* <div className="card">
        <div className="title">
          <h3>Create Your Account</h3>
        </div> */}
        <Card type={"vertical"} title={"Create Account"}>
           <form onSubmit={handleSubmit}>
            <Inputs
           name={'FullName'}
           type={'text'}
           varient={errors.FullName && touched.FullName ? 'error':'normal'}
           value={values.fullName}
           handleChange={handleChange}
           placeholder={"Full Name"}
           
         />
           { errors.FullName && touched.FullName ? <div className="error-message">{errors.FullName} </div>: null }
           <Inputs
           name={'email'}
           type={'email'}
           varient={ errors.email && touched.email ?"error": "normal"}
           value={values.email}
           handleChange={handleChange}
           placeholder={"Email "}
         />
          { errors.email && touched.email ? <div className="error-message">{errors.email} </div>: null }
         <Inputs
           name={'password'}
           type={'password'}
           value={values.password}
           varient={ errors.password && touched.password ?'error':'normal' }
           handleChange={handleChange}
           placeholder={"Password"}
         />
            { errors.password && touched.password ? <div className="error-message">{errors.password} </div>: null }
          <Inputs
           name={'organization'}
           type={'text'}
           value={values.organization}
           varient={ errors.organization && touched.organization?"error": "normal"}
           handleChange={handleChange}
           placeholder={"Organization"}
         />
          { errors.organization && touched.organization ? <div className="error-message">{errors.organization} </div>: null }
         <Button type={"submit"} text={"Sign Up"}/>
         <div className="login-link">
          <p>Already have  an account ? <a href=""> Login  in</a> </p>
        </div>
           </form>

        </Card>
        {/* <form onSubmit={handleSubmit}> */}
         { /* Name*/ }
         
          {/* <input 
          className={errors.fullName && touched.fullName?"error-input":"normal-input"}
           type="text"
           name="fullName" 
           placeholder="Full Name"
           value={values.fullName}
           onChange={handleChange}
           autoComplete="off"
             /> */}
          {/* { errors.fullName && touched.fullName ? <div className="error-message">{errors.fullName} </div>: null } */}
          { /* Email */ }
         
          {/* <input 
          className={errors.email && touched.email?"error-input":"normal-input"}
          type="email" 
          name="email" 
          placeholder="Email"
          value={values.email}
          onChange={handleChange} 
          autoComplete="off"
          /> */}
           {/* { errors.email && touched.email ? <div className="error-message">{errors.email} </div>: null } */}

          { /* Password*/ }
           
          {/* <input 
          className={errors.password && touched.password?"error-input":"normal-input"}
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          autoComplete="off"
          /> */}
            {/* { errors.password && touched.password ? <div className="error-message">{errors.password} </div>: null } */}

          {/* Organization */}
          
          {/* <input 
          className={errors.organization && touched.organization?"error-input":"normal-input"}
          type="text" 
          name="organization" 
          placeholder="Organization"
          value={values.organization} 
          onChange={handleChange}
          autoComplete="off"
          /> */}
            {/* { errors.organization && touched.organization ? <div className="error-message">{errors.organization} </div>: null } */}

          {/* <button 
          type="submit"
          >
            Sign Up
          </button> */}
          
        {/* </form> */}
        {/* <div className="login-link">
          <p>Already have  an account ? <a href=""> Login  in</a> </p>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Signup;