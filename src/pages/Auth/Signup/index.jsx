import React, { useEffect, useState } from "react";
import "./Signup.css";
import { useFormik } from "formik";
import { SignUpSchema } from "../../../schema";
import Inputs from "../../../components/BaseComponent/Inputs";
import Button from "../../../components/BaseComponent/Button";
import Modal from "../../../components/BaseComponent/Modal";
import { signup } from "../../../services/Auth";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/BaseComponent/Loader";
import { setToken } from "../../../util/Token";


const Signup = () => {
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);
  const navigate=useNavigate();
  const [initialValues,setInitialValue]=useState({
    name:"",
    email :"",
    password:"",
    organizationName:""
  })
const{values,errors,touched,handleSubmit,handleChange}=  useFormik({
    initialValues:initialValues,
    validationSchema:SignUpSchema,
    onSubmit :async(values ,actions)=>{
      try {
        setError(null)
        setLoading(true)
        const response=await signup(values);
        const {token}=response.data;
        setToken(token);
        setLoading(false)
        navigate(`/verify?token=${token}`);
      } catch (error) {
        setLoading(false);
        setError(error)
      }

    }
  }) 


  return (
    <div className="container">
        <Modal  title={"Create Account"}>
          { error && (<p style={{color:"red"}}>{error}</p>)}
           <form onSubmit={handleSubmit}>
            <Inputs
           name={'name'}
           type={'text'}
           varient={errors.name && touched.name ? 'error':'normal'}
           value={values.name}
           handleChange={handleChange}
           placeholder={"Full Name"}
           
         />
           { errors.name && touched.name ? <div className="error-message">{errors.name} </div>: null }
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
          max={8}
         />
            { errors.password && touched.password ? <div className="error-message">{errors.password} </div>: null }
          <Inputs
           name={'organizationName'}
           type={'text'}
           value={values.organizationName}
           varient={ errors.organizationName && touched.organizationName?"error": "normal"}
           handleChange={handleChange}
           placeholder={"organizationName"}
         />
          { errors.organizationName && touched.organizationName ? <div className="error-message">{errors.organizationName} </div>: null }
        {
          loading ?
           ( <button>  <Loader width={"30"} height={"20"} visible={loading}/></button>) : 
            <Button type={"submit"} text={"Sign Up"}/> 
        }
       
         <div className="login-link">
          <p>Already have  an account ? <a href="/login"> Login  in</a> </p>
        </div>
           </form>

        </Modal>
    </div>
  );
};

export default Signup;