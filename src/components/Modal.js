import React from "react";

const Modal = ({showModal,closeModal}) => {
  return (
    <div>
      <div className="modal-wrapper"
      style = {{
        transform:showModal ? "translate(0)" : "translate(100vh)",
          opacity:showModal ? "1": "0"
      }
    
    }
      >
        <div className="modal-header">
          <h1>Welcome</h1>
          <span className="close-modal-btn" onClick={closeModal}>x</span>
        </div>
        <div className="modal-content">
          <div className="modal-body">
            <h4>Modal</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              temporibus modi officiis, alias minus beatae ratione velit ducimus
              quisquam tempore similique laborum sapiente possimus aliquam.
              Culpa, sit. Voluptatibus, a fuga.
            </p>
          </div>
          <div className="modal-footer">
            <button className="btn-cancel" onClick={closeModal}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
