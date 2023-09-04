import React from "react";
import Labs from "../public/images/labs logo.png";
import Users from "../public/images/users.svg";
import Applications from "../public/images/applications.svg";
import Settings from "../public/images/settings.svg";
import Logout from "../public/images/logout.svg";
import Test from "../public/images/test.jpg";
import Image from "next/image";
import Link from "next/link";

const LeftPanel = ({activity1, activity2, activity3, state1, state2, state3}) => {
  return (
    <div>
    <div className="centre" style={{width: "8.2rem"}}>
      <Image src={Labs} alt="labs" />
    </div>
    <Link className={activity1} href="/admin" >
      <Image src={Users} alt="user management" />
      <p className={state1}>User Management</p>
    </Link>
    <Link className={activity2} href="/applications">
      <Image src={Applications} alt="applications" />
      <p className={state2} >Applications</p>
    </Link>
    <Link className={activity3} href="#">
      <Image src={Settings} alt="settings" />
      <p className={state3} >Settings</p>
    </Link>
    <div className="logout centre">
    <div className="logout_image">
      <Image className="logout_image" src={Test}/>
    </div>
    <div className="logout_text">
      <p style={{color:"white", fontSize: "1.3rem"}}>Ada Merlin</p>
      <p style={{color:"white"}}>user@gmail.com</p>
    </div>
    <Image className="logout_logo" src={Logout} alt="logout" />
    </div>
    </div>
  );
};

export default LeftPanel;


