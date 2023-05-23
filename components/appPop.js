import React, { useState, useEffect } from 'react';
import Image from "next/image";
import ClosePopup from "../public/images/close_popup.svg"

const Popup = ({clicks, name}) => {

  const [showPopup, setShowPopup] = useState(false);
  const [countdown, setCountdown] = useState(5);
  useEffect(() => {
    if (clicks === true) {
      setShowPopup(true);
    }
  }, [clicks]);

  useEffect(() => {
    let countdownInterval = null;

    if (showPopup) {
      countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [showPopup]);

  const handleClosePopup = () => {
    setCountdown(5)
    setShowPopup(false);
  };

  useEffect(() => {
    if (countdown === 0) {
      setCountdown(5)
      setShowPopup(false);

    }
  }, [countdown]);

  return (
    <div>
      {showPopup && (
        <div className="appli_pop">
          <div className="appli_pop_content">
            <p style={{color:"#FFFFFF"}}>
              {name} has been created
              <span style={{float:"right", color:"#8AB4F8"}}><b>Undo</b></span>
            </p>

          </div>
          <Image
            src={ClosePopup}
            onClick={handleClosePopup}
            style={{marginLeft:"1rem"}}/>
        </div>
      )}
    </div>
  );
};

export default Popup;
