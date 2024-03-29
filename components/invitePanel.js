import Image from "next/image";
import { React } from "react";
import Filter from "../public/images/filter.svg";
import UserAdd from "../public/images/user_add.svg";

function InvitesPanel({ dispatch }) {
  return (
    <>
      <div className="buttons">
        <button
          className="filter_btn"
          onClick={() => {
            dispatch({ type: "setInviteFilterDropdown" });
          }}
        >
          <Image style={{ marginRight: "8px" }} src={Filter} alt="user management" />
          Filter
        </button>

        <button className="add_user_btn" onClick={() => dispatch({ type: "showAddUserForm" })}>
          <Image style={{ marginRight: "8px" }} src={UserAdd} alt="user management" />
          Add User
        </button>
      </div>
    </>
  );
}

export default InvitesPanel;
