import React from "react";

function Popup({ handleBanUser, setIsTabOpen, setIsOpen, handleRoleSwitch, handleLiftBanUser, identity }) {
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
        <div className="popup_content" onClick={identity.state === "active" ? handleBanUser : handleLiftBanUser}>
          {identity.state === "active" ? "Ban User" : "Lift Ban"}
        </div>
        <div className="popup_content" onClick={handleRoleSwitch}>
          {identity.traits.role === "user" ? "Make Admin" : "Make User"}
        </div>
      </div>
    </div>
  );
}

export default Popup;
