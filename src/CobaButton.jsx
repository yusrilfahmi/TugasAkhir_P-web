import React, { useState } from 'react';
import StatusPopup from './StatusPopup';
import CobaButtonCSS from'./CobaButton.module.css';

function CobaButton() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className={CobaButtonCSS.Coba}>
      <button className={CobaButtonCSS.openpopupbutton} onClick={openPopup}>
        Open Status
      </button>
      <StatusPopup
        isOpen={isPopupOpen}
        onClose={closePopup}
      />
    </div>
  );
}

export default CobaButton;