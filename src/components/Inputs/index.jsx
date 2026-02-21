import React from "react";
import "./Inputs.css"
const Inputs=({value,type,varient,name,handleChange,placeholder,reset})=>{
    return(
    <>
    <input className={varient} type={type} name={name} id="" onChange={handleChange} placeholder={placeholder} onReset={reset}/>
    </>
)

}
export default Inputs