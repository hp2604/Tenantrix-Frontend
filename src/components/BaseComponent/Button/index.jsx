import React from "react";
import "./Button.css"
const Button=({type,text , disable,onClick, style})=>{
    return(
    <>
    <button
    type={type}
    disabled={disable}
    onClick={onClick}
    style={style}
    >
        {text}
    </button>
    </>
);

}
export default Button;