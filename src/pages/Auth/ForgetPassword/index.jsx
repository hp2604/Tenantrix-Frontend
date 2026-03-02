import React, { useEffect, useState } from "react";
import Card from "../../../components/Card";
import Inputs from "../../../components/Inputs";
import Button from "../../../components/Button";
import { useFormik } from "formik";
import { ResetPassword } from "../../../schema";
import Loader from "../../../components/Loader";
import { resetPassword } from "../../../services/Auth";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SquareCheck } from 'lucide-react';
const ForgetPassword=()=>{
    useEffect(()=>{
       const token=searchParams.get('token');
       if(!token){
        navigate("/")
       }
       setToken(token)
    },[])
    const[searchParams]=useSearchParams();
    const [token,setToken]=useState("");
    const [error,setError]=useState(null);
    const[loading,setLoading]=useState(false);
    const [success,setSuccess]=useState(true);
    const[tittle,setTittle]=useState(' Password Changed Successfully ')
    const navigate=useNavigate();
    const initialValue={
        password:"",
        confirmPassword:""
    }
    const {values,errors,touched,handleChange,handleSubmit}=useFormik({
        initialValues:initialValue,
        validationSchema:ResetPassword,
        onSubmit:async(value,actions)=>{
            try {
            setError(false);
            setLoading(true);
            const response=await resetPassword(token,values);
            setLoading(false);
            setTittle(" ")
            setSuccess(true)
            actions.resetForm();
            } catch (error) {
                setLoading(false);
                setError(error)
            }
            
        }
    })
    const redirect=()=>{
       
         navigate("/login")
    }
    return(
    <>
    <div className="container">
        <Card type={'vertical'} title={tittle}>
            {
                !success &&(<form onSubmit={handleSubmit} >
                <Inputs type={'text'} name={'password'} placeholder={'New Password'} varient={errors.password && touched.password?'error' : 'normal'} max={8} value={values.password} handleChange={handleChange}/>
                { errors.password && touched.password? <div className="error-message">{errors.password} </div>: null }
                <Inputs type={'text'} name={'confirmPassword'}  placeholder={'Confirm Password'} varient={errors.confirmPassword?'error':'normal'} max={8} value={values.confirmPassword} handleChange={handleChange}/>
                { errors.confirmPassword && touched.confirmPassword ? <div className="error-message">{errors.confirmPassword} </div>: null }
                {loading ? (
                    <button ><Loader width={"30"} height={"20"} visible={loading}/></button> ):
                      <Button text={'Submit'} type={'submit'}/>
                }
              
            </form>)
            }
             {success && (
            <div id="success-card">
              {" "}
              <SquareCheck size={100} width={100} color="green" />
              <Button text={"Login"} onClick={redirect} >
                {" "}
              </Button>
            </div>
          )}
            

        </Card>
    </div>
    </>
    )

}

export default ForgetPassword;