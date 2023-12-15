import React from "react";
import Create_set from "../public/images/Create.svg";
import Verify_set from "../public/images/Verify.svg";
import Set_set from "../public/images/Set.svg";
import Image from "next/image";

const Icons = () => {

      return (
        <div className="icon_box">
        <table className="icon_table">
        <tbody>
        <tr>
          <td><Image className="icon" src={Create_set} alt="create" /></td>
          <td><hr className="icon_hr" /></td>
          <td><Image className="icon" src={Set_set} alt="set" /></td>
          <td><hr className="icon_hr" /></td>
          <td><Image className="icon" src={Verify_set} alt="verify" /></td>
        </tr>
        </tbody>
      </table>
      </div>
      );
    };

    export default Icons;

