import React from "react";
import "./Modal.css";
const Modal = ({ title, subtitle, children }) => {
  return (
    <>
      <div id="modal-container">
        {title && (
          <div id="title">
            <p> {title}</p>
          </div>
        )}
        {
          subtitle && (
            <div id="subtitle">
              <p>{subtitle}</p>
            </div>

          )
        }
        {children}
      </div>
    </>
  );
};

export default Modal;
