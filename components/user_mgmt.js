import React, { useState } from "react";
import Popup from "./popup";
import UserPop from "./user_mgmt_pop";
import { handleBanIdentityFlow, handleDeleteIdentityFlow } from "../api/adminFlow";

function UserPopup({ identityId }) {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const [isTabOpen, setIsTabOpen] = useState(false);

  async function handleBanUser(id) {
    try {
      await handleBanIdentityFlow(id);
      alert("User banned");
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeleteUser(id) {
    try {
      await handleDeleteIdentityFlow(id);
      alert("User Deleted");
    } catch (error) {
      console.error(error);
    }
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
              <div className="popup_content" onClick={() => handleBanUser(identityId)}>
                Ban user
              </div>
              <div className="popup_content">Make user</div>
            </>
          }
          handleClose={togglePopup}
        />
      )}
      {isTabOpen && <UserPop handleDeleteUser={() => handleDeleteUser(identityId)} content={<>make popup</>} />}
    </div>
  );
}

export default UserPopup;
