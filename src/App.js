import React, { useState } from "react";
import Modal from './components/Modal'
function App() {
  const [showModal,setShowModal] = useState(false)

  const closeModal = () => {
    setShowModal(false);
  }
 
  return (
    <div>
      {showModal ? (
        <div className="modal-back-drop" onClick={closeModal}></div>
      ) : null}
      <button onClick={() => setShowModal(true)} className="btn-open-modal">
        Open Modal
      </button>
      <Modal showModal={showModal} closeModal={closeModal} />
    </div>
  );
}

export default App;
