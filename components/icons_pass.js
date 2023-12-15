import React from "react";
import Create_end from "../public/images/Create_done.svg";
import Verify from "../public/images/Verify.svg";
import Set_here from "../public/images/Set_2.svg";
import Image from "next/image";

const IconsPass = () => {

      return (
        <div className="icon_box">
        <table className="icon_table">
        <tbody>
        <tr>
          <td><Image className="icon" src={Create_end} alt="create" /></td>
          <td><hr className="icon_hr" /></td>
          <td><Image className="icon" src={Set_here} alt="set" /></td>
          <td><hr className="icon_hr" /></td>
          <td><Image className="icon" src={Verify} alt="verify" /></td>
        </tr>
        </tbody>
      </table>
      </div>
      );
    };

    export default IconsPass;

