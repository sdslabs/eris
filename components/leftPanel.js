import Image from "next/image";
import Link from "next/link";
import React from "react";
import Applications from "../public/images/applications.svg";
import Applications_self from "../public/images/applications_self.svg";
import Labs from "../public/images/labs logo.png";
import Logout from "../public/images/logout.svg";
import Settings from "../public/images/settings.svg";
import Test from "../public/images/test.jpg";
import Users from "../public/images/users.svg";
import Users_self from "../public/images/users_self.svg";

const LeftPanel = ({ page, activity1, activity2, activity3, state1, state2, state3 }) => {
  var User, Application;
  if (page == "user") {
    User = Users_self;
    Application = Applications;
  } else if (page == "applications") {
    User = Users;
    Application = Applications_self;
  }
  return (
    <div className="left_panel">
      <div className="centre" style={{ width: "8.2rem" }}>
        <Image src={Labs} alt="labs" />
      </div>
      <Link className={activity1} href="/admin">
        <Image src={User} alt="user management" />
        <p className={state1}>User Management</p>
      </Link>
      <Link className={activity2} href="/applications">
        <Image src={Application} alt="applications" />
        <p className={state2}>Applications</p>
      </Link>
      <Link className={activity3} href="#">
        <Image src={Settings} alt="settings" />
        <p className={state3}>Settings</p>
      </Link>
      <div className="logout centre">
        <div className="logout_image">
          <Image className="logout_image" src={Test} alt="test" />
        </div>
        <div className="logout_text">
          <p style={{ color: "white", fontSize: "1.3rem" }}>Ada Merlin</p>
          <p style={{ color: "white" }}>user@gmail.com</p>
        </div>
        <Image className="logout_logo" src={Logout} alt="logout" />
      </div>
    </div>
  );
};

export default LeftPanel;
