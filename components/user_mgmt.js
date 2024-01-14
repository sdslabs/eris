import React, { useState } from "react";
import { handleBanIdentityFlow, handleDeleteIdentityFlow } from "../api/adminFlow";
import Popup from "./popup";
import UserRemovePopup from "./user_mgmt_pop";

function UserPopup({ identityId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isTabOpen, setIsTabOpen] = useState(false);

  async function handleBanUser() {
    try {
      setIsOpen(false);
      await handleBanIdentityFlow(identityId);
      alert("User banned");
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeleteUser() {
    try {
      setIsTabOpen(false);
      await handleDeleteIdentityFlow(identityId);
      alert("User Deleted");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="icon_box">
      <input className="popup_button" type="button" value=":" onClick={() => setIsOpen((old) => !old)} />
      {isOpen && <Popup setIsTabOpen={setIsTabOpen} handleBanUser={handleBanUser} setIsOpen={setIsOpen} />}
      {isTabOpen && <UserRemovePopup handleDeleteUser={handleDeleteUser} setIsTabOpen={setIsTabOpen} />}
    </div>
  );
}

export default UserPopup;
