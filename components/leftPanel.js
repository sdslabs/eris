import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { handleGetLogoutFlow, handlePostLogoutFlow } from "../api/logoutFlow";
import { handleGetSessionDetailsFlow } from "../api/profileFlow";
import Applications from "../public/images/applications.svg";
import Applications_self from "../public/images/applications_self.svg";
import Labs from "../public/images/labs logo.png";
import Logout from "../public/images/logout.svg";
import Settings from "../public/images/settings.svg";
import Test from "../public/images/test.jpg";
import Users from "../public/images/users.svg";
import Users_self from "../public/images/users_self.svg";

function LeftPanel({ page, activity1, activity2, activity3, state1, state2, state3 }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function getProfileDetails() {
      const { name, email } = await handleGetSessionDetailsFlow();
      setName(name);
      setEmail(email);
    }
    getProfileDetails();
  }, []);

  const User = page === "user" ? Users_self : Users;
  const Application = page === "user" ? Applications : Applications_self;

  async function handleLogout() {
    try {
      const logoutToken = await handleGetLogoutFlow();
      await handlePostLogoutFlow(logoutToken);
      router.push("/");
    } catch (err) {
      console.error(err);
    }
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
          <p style={{ color: "white", fontSize: "1.3rem" }}>{name}</p>
          <p style={{ color: "white" }}>{email}</p>
        </div>
        <button onClick={handleLogout}>
          <Image className="logout_logo" src={Logout} alt="logout" />
        </button>
      </div>
    </div>
  );
}

export default LeftPanel;
