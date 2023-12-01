import React, { useEffect, useState } from "react";
import axios from "axios";

const InvitesTable = ({ text }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_LIST).then((response) => {
      const data = response.data.identities;
      console.log(data);
      setData(data);
    });
  }, []);

  return (
    <div>
      <table className="admin_table">
        <tbody>
          <tr>
            <th style={{ width: "25%" }}>
              <b>NAME</b>
            </th>
            <th style={{ width: "25%" }}>
              <b>EMAIL</b>
            </th>
            <th style={{ width: "10%" }}>
              <b>ROLE</b>
            </th>
            <th style={{ width: "10%" }}>
              <b>DATE INVITED</b>
            </th>
            <th style={{ width: "15%" }}>
              <b>INVITED BY</b>
            </th>
            <th style={{ width: "15%" }}>
              <b>GITHUB</b>
            </th>
          </tr>

          {data.map((item) => (
            <tr key={item.id} className="invites_data">
              <td>{item.traits.name}</td>
              <td>{item.traits.email}</td>
              <td>{item.traits.role}</td>
              <td>{item.traits.created_at}</td>
              <td>{item.traits.invitedby}</td>
              <td>{item.traits.github}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvitesTable;
