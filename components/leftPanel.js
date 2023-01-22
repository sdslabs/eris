import React, { useState } from "react";
import Labs from "../public/images/labs logo.png";
import Users from "../public/images/users.svg";
import Applications from "../public/images/applications.svg";
import Settings from "../public/images/settings.svg";
import Image from "next/image";

const LeftPanel = ({activity1, activity2, activity3, state1, state2, state3}) => {
  return (
    <div>
    <div className="centre">
      <Image src={Labs} alt="labs" />
    </div>
    <div className={activity1}>
    <Image src={Users} alt="user management" />
    <p className={state1} style={{color:"black"}}>User Management</p>
    </div>
    <div className={activity2}>
    <Image src={Applications} alt="applications" />
    <p className={state2} style={{color:"white"}}>Applications</p>
    </div>
    <div className={activity3}>
    <Image src={Settings} alt="settings" />
    <p className={state3} style={{color:"white"}}>Settings</p>
    </div>
    </div>
  );
};

export default LeftPanel;


