import React from "react";
import data from "../data/invites_data.json"

const InvitesTable = ({ text }) => {

  return (
    <div>
      <table className="admin_table">
        <tbody>
        <tr>
          <th style={{width: "25%"}}><b>NAME</b></th>
          <th style={{width: "25%"}}><b>EMAIL</b></th>
          <th style={{width: "10%"}}><b>ROLE</b></th>
          <th style={{width: "10%"}}><b>DATE INVITED</b></th>
          <th style={{width: "15%"}}><b>INVITED BY</b></th>
          <th style={{width: "15%"}}><b>GITHUB</b></th>
        </tr>

        {data.map((item) => (
           <tr key={item.id} className="invites_data">
           <td>{item.name}</td>
           <td>{item.email}</td>
           <td>{item.role}</td>
           <td>{item.date}</td>
           <td>{item.invitedby}</td>
           <td>{item.github}</td>
         </tr>
        ))}


        </tbody>
      </table>

    </div>
  );
};

export default InvitesTable;

