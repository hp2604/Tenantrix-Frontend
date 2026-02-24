import React from "react";
import { ThreeDots } from "react-loader-spinner";
import "./loader.css"

const Loader=({height,width,visible})=>{
return(
<>
<div className="loader-container">
<ThreeDots
visible={visible}
height={height}
width={width}
color="#fff"
radius="10"
ariaLabel="three-dots-loading"/>
</div>

</>
)
}

export default Loader;