import React from "react";
import Card from "../Card";
import Button from "../Button";
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
