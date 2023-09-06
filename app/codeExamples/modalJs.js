const modalJs = `import { useState } from 'react';

function Modal() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
}`;

export default modalJs;