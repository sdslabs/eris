import Image from "next/image";
import { React } from "react";
import Filter from "../public/images/filter.svg";
import UserAdd from "../public/images/user_add.svg";

function UserRoleFilter({ dispatch, adminChecked, userChecked, handleRoleCheckboxes }) {
  return (
    <div className="roles">
      <b>Role </b>
      <input
        type="checkbox"
        style={{ marginLeft: "1rem" }}
        id="admin_role"
        onChange={() => {
          dispatch({ type: "setAdminChecked" });
          handleRoleCheckboxes("admin");
        }}
        checked={adminChecked}
      />{" "}
      Admin
      <input
        type="checkbox"
        style={{ marginLeft: "2rem" }}
        id="user_role"
        onChange={() => {
          dispatch({ type: "setUserChecked" });
          handleRoleCheckboxes("user");
        }}
        checked={userChecked}
      />{" "}
      User
    </div>
  );
}

function UsersPanel({ dispatch, handleRoleCheckboxes, userChecked, adminChecked }) {
  return (
    <>
      <UserRoleFilter
        userChecked={userChecked}
        adminChecked={adminChecked}
        dispatch={dispatch}
        handleRoleCheckboxes={handleRoleCheckboxes}
      />
      <div className="buttons">
        <button
          className="filter_btn"
          onClick={() => {
            dispatch({ type: "setUserFilterDropdown" });
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

export default UsersPanel;
