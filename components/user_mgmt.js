import React, { useState } from "react";
import Popup from "./popup";
import UserPop from "./user_mgmt_pop";
import axios from "axios";

const UserPopup = ({identityId}) => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const [isTabOpen, setIsTabOpen] = useState(false);
  const toggleTabPopup = () => {
    setIsOpen(!isOpen);
  };

  function handleBanUser(id) {
    axios.post(process.env.NEXT_PUBLIC_BAN,{identity:id}).then((response) => {
      if (response.status === 200) {
        alert("User banned");
      }
    });
  }

  return (
    <div className="icon_box">
      <input className="popup_button" type="button" value=":" onClick={togglePopup} />
      {isOpen && (
        <Popup
          content={
            <>
              <div className="popup_content" onClick={() => setIsTabOpen(!isTabOpen)}>
                Remove user
              </div>
              <div className="popup_content" onClick={()=>handleBanUser(identityId)}>Ban user</div>
              <div className="popup_content">Make user</div>
            </>
          }
          handleClose={togglePopup}
        />
      )}
      {isTabOpen && <UserPop content={<>make popup</>} />}
    </div>
  );
};

export default UserPopup;
