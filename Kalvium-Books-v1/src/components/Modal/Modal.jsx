import React from 'react';
import './Modal.css'; // Import your modal styling

const Modal = ({ title, description, imageUrl, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>{title}</h2>
        <div className="modal-body">
          {imageUrl && <img src={imageUrl} alt={title} />}
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
