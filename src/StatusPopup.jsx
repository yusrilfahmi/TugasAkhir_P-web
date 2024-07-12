import React from 'react';
import Status from './Status.jsx'
import StatusPopupCSS from './StatusPopup.module.css';

const StatusPopup = ({ isOpen, onClose, statusContent }) => {
  if (!isOpen) return null;

  return (
    <div className={StatusPopupCSS.popupoverlay} onClick={onClose}>
      <div className={StatusPopupCSS.popupcontent} onClick={(e) => e.stopPropagation()}>
        <button className={StatusPopupCSS.closebutton} onClick={onClose}>
          &times;
        </button>
        <div className={StatusPopupCSS.statuscontent}>
            <Status></Status>
        </div>
      </div>
    </div>
  );
};

export default StatusPopup;
