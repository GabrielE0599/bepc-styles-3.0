const modalCss = `/*------ Modal ------*/
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(24, 22, 44, 0.7);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease; /* Transición de opacidad */
  z-index: 9999;
}

.modal.visible {
  opacity: 1;
  pointer-events: auto;
}

.modal-contenido {
  background-color: #fff;
  padding: 20px;
  width: 40%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative;
  border-radius: 12px;
}

.modal-img{
  border-radius: 4px;
  height: 80%;
  width: auto;
}

/*------ To use left oriented modal ------*/

.modal-header-left, .modal-p-left{
  float: left;
}

.modal-p-left{
  text-align: left;
}

.modal-button-right-primary{
  float: right;
}`;

export default modalCss;