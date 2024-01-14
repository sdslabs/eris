import React from "react";

function Popup({ handleBanUser, setIsTabOpen, setIsOpen }) {
  return (
    <div className="popup_box">
      <div className="box">
        <div
          className="popup_content"
          onClick={() => {
            setIsTabOpen((old) => !old);
            setIsOpen(false);
          }}
        >
          Remove user
        </div>
        <div className="popup_content" onClick={handleBanUser}>
          Ban user
        </div>
        <div className="popup_content">Make user</div>
      </div>
    </div>
  );
}

export default Popup;
