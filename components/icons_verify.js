import React from "react";
import Create_2 from "../public/images/Create_done.svg";
import Verify_2 from "../public/images/Verify_2.svg";
import Set_1 from "../public/images/Set.svg";
import Image from "next/image";

const Icons = () => {

      return (
        <div className="icon_box">
        <table>
        <tbody>
        <tr>
          <td><Image className="icon" src={Create_2} alt="create" /></td>
          <td><hr className="icon_hr"/></td>
          <td><Image className="icon" src={Verify_2} alt="verify" /></td>
          <td><hr className="icon_hr" /></td>
          <td><Image className="icon" src={Set_1} alt="set" /></td>
        </tr>
        </tbody>
      </table>   
      </div>
      );
    };
    
    export default Icons;
    
    