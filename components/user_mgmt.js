import React, {useState} from "react";
import Popup from "./popup";

const UserPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {setIsOpen(!isOpen);}

      return (
        <div className="icon_box">
            <input
                className="popup_button"
                type="button"
                value=":"
                onClick={togglePopup}
            />
            {isOpen && <Popup content={
                <>
                    <div className="popup_content">Remove user</div>
                    <div className="popup_content">Ban user</div>
                    <div className="popup_content">Make user</div>
                </>
            }
            handleClose={togglePopup}
            />}
        </div>
      );
    };

    export default UserPopup;

