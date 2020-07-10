import React from 'react';
import ReactModal from 'react-modal';
import './index.scss';

ReactModal.setAppElement('#root');

const Modal = ({ description, title, isOpen, onClose }) => (
  <ReactModal isOpen={isOpen} className="modalContent" overlayClassName="modalOverlay" >
    <h1 className="modalContent__title">{ title }</h1>
    <p className="modalContent__text">{ description }</p>
    <button
      className="modalContent__close"
      title="Close"
      onClick={onClose}>X</button>
  </ReactModal>
);

export default Modal;