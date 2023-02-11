import React from "react";
import UserData from "./user_data";

const UserTable = ({ text }) => {

  return (
    <div>
      <table className="user_table">
        <tbody>
        <tr>
          <th style={{width: "30%"}}><b>NAME</b></th>
          <th style={{width: "35%"}}><b>EMAIL</b></th>
          <th style={{width: "10%"}}><b>ROLE</b></th>
          <th style={{width: "20%"}}><b>GITHUB</b></th>
          <th style={{width: "5%"}}></th>
        </tr>
        <UserData />
        <UserData />
        <UserData />
        <UserData />
        <UserData />
        <UserData />
        <UserData />
        <UserData />
        <UserData />
        <UserData />
        <UserData />
        <UserData />
        <UserData />
        <UserData />
        <UserData />
        <UserData />
        <UserData />
        <UserData />

        </tbody>
      </table>

    </div>
  );
};

export default UserTable;

