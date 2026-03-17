import React from "react";
import Card from "../BaseComponent/Modal";
import Button from "../BaseComponent/Button";
import { useNavigate } from "react-router-dom";
const SuccessCard=({title})=>{
    const navigate=useNavigate();
   
    return(
    <>
    <div className="container">
        <Card type={'vertical'}  >
          
        </Card>
    </div>
    </>
    )

};
export default SuccessCard;
