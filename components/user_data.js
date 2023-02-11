import {React, useState} from "react";
import Popup from "./popup";

const UserData = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {setIsOpen(!isOpen);}
  return (
        <tr className="users_data">
          <td>User Name</td>
          <td>user@gmail.com</td>
          <td>Admin</td>
          <td>github.com/user</td>
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
  );
};

export default UserData;

