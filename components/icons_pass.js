import React from "react";
import Create_2 from "../public/images/Create_done.svg";
import Verify_3 from "../public/images/Verify_done.svg";
import Set_2 from "../public/images/Set_2.svg";
import Image from "next/image";

const Icons = () => {

      return (
        <div className="icon_box">
        <table>
        <tbody>
        <tr>
          <td><Image className="icon" src={Create_2} alt="create" /></td>
          <td><hr className="icon_hr"/></td>
          <td><Image className="icon" src={Verify_3} alt="verify" /></td>
          <td><hr className="icon_hr" /></td>
          <td><Image className="icon" src={Set_2} alt="set" /></td>
        </tr>
        </tbody>
      </table>   
      </div>
      );
    };
    
    export default Icons;
    
    