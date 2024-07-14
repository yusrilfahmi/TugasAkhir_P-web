import React from 'react';
import pp from './assets/pp.jpg'
import Status from './Status.jsx'
import StatusPopupCSS from './StatusPopup.module.css';
import { BiSolidImageAdd } from 'react-icons/bi';

const StatusPopup = ({ isOpen, onClose, statusContent }) => {
  if (!isOpen) return null;

  return (
    <div className={StatusPopupCSS.popupoverlay} onClick={onClose}>
      <div className={StatusPopupCSS.popupcontent} onClick={(e) => e.stopPropagation()}>
        <button className={StatusPopupCSS.closebutton} onClick={onClose}>
          &times;
        </button>
        <div className={StatusPopupCSS.atas}>
          <img src={pp} className={StatusPopupCSS.pp} />
          Posting sesuatu untuk hari ini!
        </div>
        <div className={StatusPopupCSS.statuscontent}>
          <Status></Status>
        </div>
        <div className={StatusPopupCSS.garis}>
        </div>
        <div className={StatusPopupCSS.buttonbawah}>
          <button className={StatusPopupCSS.upimg}> <BiSolidImageAdd className={StatusPopupCSS.img}></BiSolidImageAdd></button>
          <button className={StatusPopupCSS.posting}>Posting</button>
        </div>
      </div>
    </div>
  );
};

export default StatusPopup;
