import React, {useState} from "react";
import Popup from "./popup";
import UserPop from "./user_mgmt_pop"

const UserPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {setIsOpen(!isOpen);}

    const [isTabOpen, setIsTabOpen] = useState(false);
    const toggleTabPopup = () => {setIsOpen(!isOpen);}

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
                    <div
                    className="popup_content"
                    onClick={()=>setIsTabOpen(!isTabOpen)}>
                        Remove user
                    </div>
                    <div className="popup_content">Ban user</div>
                    <div className="popup_content">Make user</div>
                </>
            }
            handleClose={togglePopup}
            />}
            {isTabOpen && <UserPop content={
                <>
                    make popup
                </>
            }/>}
        </div>
      );
    };

    export default UserPopup;

