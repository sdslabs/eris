import Image from "next/image";
import React from "react";
import Cross from "../public/images/cross.png";
import Logo from "../public/images/remove_user.svg";
import ButtonKeep from "./button_keep";
import ButtonPopup from "./button_popup";

function UserRemovePopup({ setIsTabOpen, handleDeleteUser }) {
  return (
    <div className="user_popup">
      <div className="popup_banner" onClick={() => setIsTabOpen(false)}>
        <Image src={Cross} alt="Cross icon" />
      </div>
      <div className="popup_lower">
        <div className="popup_logo">
          <Image src={Logo} alt="Image Here" />
        </div>
        <div className="user_popup_content">
          <div className="popup_prompt">Are you sure you want to remove user?</div>
          <div className="popup_warning">
            Once removed the user&#39;s current data will be erased permanently after 15 days.
          </div>
          <div className="popup_buttons">
            <ButtonKeep text="Keep User" func={() => setIsTabOpen(false)} />
            <ButtonPopup text="Remove User" func={handleDeleteUser} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserRemovePopup;
