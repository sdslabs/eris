import Image from "next/image";
import { React } from "react";
import Filter from "../public/images/filter.svg";
import UserAdd from "../public/images/user_add.svg";

function UserRoleFilter({ setAdminChecked, setUserChecked, AdminRole }) {
  return (
    <div className="roles">
      <b>Role </b>
      <input
        type="checkbox"
        style={{ marginLeft: "1rem" }}
        id="admin_role"
        onChange={() => {
          setAdminChecked((old) => !old);
          AdminRole("admin");
        }}
      />{" "}
      Admin
      <input
        type="checkbox"
        style={{ marginLeft: "2rem" }}
        id="user_role"
        onChange={() => {
          setUserChecked((old) => !old);
          AdminRole("user");
        }}
      />{" "}
      User
    </div>
  );
}

function UsersPanel({ setShowFilterDropDown, setAdminChecked, setUserChecked, AdminRole }) {
  return (
    <>
      <UserRoleFilter setAdminChecked={setAdminChecked} setUserChecked={setUserChecked} AdminRole={AdminRole} />
      <div className="buttons">
        <button
          className="filter_btn"
          onClick={() => {
            setShowFilterDropDown((old) => !old);
          }}
        >
          <Image style={{ marginRight: "8px" }} src={Filter} alt="user management" />
          {"Filter"}
        </button>

        <button className="add_user_btn">
          <Image style={{ marginRight: "8px" }} src={UserAdd} alt="user management" />
          {"Add User"}
        </button>
      </div>
    </>
  );
}

export default UsersPanel;
