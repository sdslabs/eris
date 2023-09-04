import React from "react";
import Create_1 from "../public/images/Create.svg";
import Verify_1 from "../public/images/Verify.svg";
import Set_1 from "../public/images/Set.svg";
import Image from "next/image";

const Icons = () => {

      return (
        <div className="icon_box">
        <table>
        <tbody>
        <tr>
          <td><Image className="icon" src={Create_1} alt="create" /></td>
          <td><hr className="icon_hr"/></td>
          <td><Image className="icon" src={Verify_1} alt="verify" /></td>
          <td><hr className="icon_hr" /></td>
          <td><Image className="icon" src={Set_1} alt="set" /></td>
        </tr>
        </tbody>
      </table>   
      </div>
      );
    };
    
    export default Icons;
    
    