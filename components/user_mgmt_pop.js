import React from "react";
import ButtonPopup from "./button_popup";
import ButtonKeep from "./button_keep";
import Logo from "../public/images/remove_user.svg";
import Cross from "../public/images/cross.png";
import Image from "next/image";

const Popup = props => {
  return (
    <div className="user_popup">
      <div className="popup_banner">
      {props.content}
      <Image src={Cross} alt="Cross icon" />
      </div>
      <div className="popup_lower">
        <div className="popup_logo">
          <Image src={Logo} alt="Image Here" />
          {/* <Logo/> */}
        </div>
        <div className="user_popup_content">
          <div className="popup_prompt">Are you sure you want to remove user?</div>
          <div className="popup_warning">Once removed the user&#39;s current data will be erased permanently after 15 days.</div>
          <div className="popup_buttons">
            {/* <button className="popup_button">Yes</button> */}
            {/* <button className="popup_button">No</button> */}
            <ButtonKeep text="Keep User" func={props.func} />
            <ButtonPopup text="Remove User" func={props.handleDeleteUser} />
          </div>
        </div>  
      </div>
        
    </div>
  );
};

export default Popup;
