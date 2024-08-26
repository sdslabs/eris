import React, { useState } from "react";
import {
  handleBanIdentityFlow,
  handleDeleteIdentityFlow,
  handleRemoveBanFlow,
  handleRoleSwitchFlow,
} from "@/api/adminFlow";
import Popup from "./popup";
import UserRemovePopup from "./user_mgmt_pop";
import toast from "react-hot-toast";

function UserPopup({ identity }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isTabOpen, setIsTabOpen] = useState(false);

  async function handleBanUser() {
    try {
      setIsOpen(false);
      await handleBanIdentityFlow(identity.id);
      toast.success("User banned");
    } catch (error) {
      console.error(error);
    }
  }

  async function handleLiftBanUser() {
    try {
      setIsOpen(false);
      await handleRemoveBanFlow(identity.id);
      toast.success("Ban lifted");
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeleteUser() {
    try {
      setIsTabOpen(false);
      await handleDeleteIdentityFlow(identity.id);
      toast.success("User deleted");
    } catch (error) {
      console.error(error);
    }
  }

  async function handleRoleSwitch() {
    try {
      setIsOpen(false);
      await handleRoleSwitchFlow(identity.id);
      toast.success("Role switched");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="icon_box">
      <input className="popup_button" type="button" value=":" onClick={() => setIsOpen((old) => !old)} />
      {isOpen && (
        <Popup
          setIsTabOpen={setIsTabOpen}
          handleBanUser={handleBanUser}
          handleLiftBanUser={handleLiftBanUser}
          setIsOpen={setIsOpen}
          handleRoleSwitch={handleRoleSwitch}
          identity={identity}
        />
      )}
      {isTabOpen && <UserRemovePopup handleDeleteUser={handleDeleteUser} setIsTabOpen={setIsTabOpen} />}
    </div>
  );
}

export default UserPopup;
