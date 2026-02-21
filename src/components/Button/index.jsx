import React from "react";
import "./Button.css"
const Button=({type,text , disable})=>{
    return(
    <>
    <button
    type={type}
    disabled={disable}
    >
        {text}
    </button>
    </>
);

}
export default Button;