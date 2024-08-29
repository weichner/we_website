import React from 'react';
import './ModalStyles.css';
import { IoCloseSharp } from 'react-icons/io5';

interface ModalProps {
  message: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-modal" onClick={onClose}>
          <IoCloseSharp size={30} />
        </span>
        <p>{message}</p>
        <button className="btn modal-btn" onClick={onClose}>
          GO BACK
        </button>
      </div>
    </div>
  );
};

export default Modal;
