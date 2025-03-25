import React, { useRef } from "react";
import { useClickOutside } from "../hooks/useClickOutside";
import { createPortal } from "react-dom";

const Modal = ({ children, visible, onclose }) => {
 const modalRef =useRef(null)

  

  useClickOutside(modalRef, onclose);
  if (!visible) {
    return null;
  }

  return createPortal(
    <div className=" w-full h-screen bg-black/30 flex justify-center items-center fixed top-0">
      <div ref={modalRef} className="bg-white rounded-md w-1/2 h-1/2">
        <button onClick={onclose}>close</button>
        <br />
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
