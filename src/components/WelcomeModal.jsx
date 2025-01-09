import React from "react";
import "../css/WelcomeModal.css";

const WelcomeModal = ({ isOpen, onClose, firstLine, secondLine }) => {
  if (!isOpen) return null;


  return (
    <div className="welcome-modal-overlay">
      <div className="welcome-modal">
        <div className="welcome-modal-arrow"></div>
        <div className="welcome-modal-content">
          <p className="first-line">{firstLine}</p>
          <p className="second-line">{secondLine}</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
