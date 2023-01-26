import React from "react";
import UserData from "./user_data";

const UserTable = ({ text }) => {

  return (
    <div>
      <table className="user_table">
        <tbody>
        <tr>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>ROLE</th>
          <th>GITHUB</th>
          <th></th>
        </tr>
        <tr>
        <UserData />
        </tr>
        </tbody>
      </table>
      
    </div>
  );
};

export default UserTable;

