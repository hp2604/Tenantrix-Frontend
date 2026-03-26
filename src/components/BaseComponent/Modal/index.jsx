import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ title, subtitle, children , width,height}) => {
  return (
    <>
      <div className={styles.modalContainer} style={{width:`${width}*10%`, height:`${height}vh`}}>
        {title && (
          <div className="styles.title"  >
            <p> {title}</p>
          </div>
        )}
        {
          subtitle && (
            <div className={styles.subtitle}>
              <p>{subtitle}</p>
            </div>

          )
        } 
        <div className={styles.content}>
           {children}
          </div>    
      </div>
      
    </>
  );
};

export default Modal;
