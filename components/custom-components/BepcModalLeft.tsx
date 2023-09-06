// components/Modal.js

import { useState } from 'react';

function Modal() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

    return (
      <>
      <button className='primary-button-bepc' onClick={openModal}>Open left modal</button>

      <div className={`modal ${modalVisible ? 'visible' : ''}`}>
        <div className="modal-contenido">
          <span className="cerrar" onClick={closeModal}>&times;</span>
          <h1 className='bepc-h1 modal-header-left'>Modal header</h1>
          <br></br>
          <br></br>
          <hr className='my-3'></hr>
          <p className='figtree-p modal-p-left'>This is a placeholder text text just to show the default size and weight for body text typography in a modal.
          This is a placeholder text text just to show the default size and weight for body text typography in a modal.</p>
          <br></br>
          <br></br>
          <button type='button' className='primary-button-bepc modal-button-right-primary'>Button</button>
        </div>
      </div>
      </>
    );
}
  


export default Modal;
