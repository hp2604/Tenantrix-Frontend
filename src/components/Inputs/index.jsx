import React from "react";
import "./Inputs.css"
const Inputs=({value,type,varient,name,handleChange,placeholder,reset,isDisable,max})=>{
    return(
    <>
    <input className={varient} type={type} name={name} id="" onChange={handleChange} placeholder={placeholder} onReset={reset} disabled={isDisable} maxLength={max}/>
    </>
)

}
export default Inputs