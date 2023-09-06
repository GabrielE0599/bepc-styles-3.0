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
      <button className='primary-button-bepc' onClick={openModal}>Open modal with image</button>

      <div className={`modal ${modalVisible ? 'visible' : ''}`}>
        <div className="modal-contenido">
          <span className="cerrar" onClick={closeModal}>&times;</span>
            <img
            src='/background-image-reset-2.jpg'
            alt='modal-img'
            className='modal-img'>
            </img>
            <br></br>
          <h1 className='bepc-h1'>Modal header</h1>
          <hr className='my-3'></hr>
          <p className='figtree-p'>This is a placeholder text text just to show the default size and weight for body text typography in a modal.
          This is a placeholder text text just to show the default size and weight for body text typography in a modal.</p>
          <br></br>
          <button type='button' className='primary-button-bepc'>Button</button>
        </div>
      </div>
      </>
    );
}
  


export default Modal;
