import React from "react";
import Create_end from "../public/images/Create_done.svg";
import Verify_end from "../public/images/Verify_2.svg";
import Image from "next/image";

const Icons = () => {

      return (
        <div className="icon_box">
        <table>
        <tbody>
        <tr>
          <td><Image className="icon" src={Create_end} alt="create" /></td>
          <td><hr className="icon_hr"/></td>
          <td><Image className="icon" src={Create_end} alt="set" /></td>
          <td><hr className="icon_hr" /></td>
          <td><Image className="icon" src={Verify_end} alt="verify" /></td>
        </tr>
        </tbody>
      </table>
      </div>
      );
    };

    export default Icons;

