import React from "react";
import "./Card.css"
const Card=({type,title , children})=>{
    return(
    <>
    <div className={type }>
        <div className="title">
           <h3> {title}</h3> 
        </div>
        {children}
    </div>
    </>
    )
}

export default Card;