import {React, useState} from "react";
import Popup from "./popup";
import data from "../data/users_data.json"

const UserTable = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {setIsOpen(!isOpen);}
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
        {data.map((item) => (
           <tr key={item.id} className="users_data">
           <td>{item.name}</td>
           <td>{item.email}</td>
           <td>{item.role}</td>
           <td>{item.github}</td>
           <td>
             <input
               className="popup_button"
               type="button"
               value=":"
               onClick={togglePopup}
             />
             {isOpen && <Popup content={
             <>
               <div className="popup_content">Remove user</div>
               <div className="popup_content">Ban user</div>
               <div className="popup_content">Make user</div>
             </>
             }
             handleClose={togglePopup}
             />}
           </td>
         </tr>
        ))}
        </tbody>
      </table>

    </div>
  );
};

export default UserTable;

