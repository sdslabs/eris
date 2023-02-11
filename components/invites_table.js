import React from "react";
import InvitesData from "./invites_data";

const InvitesTable = ({ text }) => {

  return (
    <div>
      <table className="admin_table">
        <tbody>
        <tr>
          <th style={{width: "25%"}}>NAME</th>
          <th style={{width: "25%"}}>EMAIL</th>
          <th style={{width: "10%"}}>ROLE</th>
          <th style={{width: "10%"}}>DATE INVITED</th>
          <th style={{width: "15%"}}>INVITED BY</th>
          <th style={{width: "15%"}}>GITHUB</th>
        </tr>
        <InvitesData />
        </tbody>
      </table>

    </div>
  );
};

export default InvitesTable;

