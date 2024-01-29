import { IconButton } from "@mui/material";
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

function LinkPanelAdmin({ User, Application, activity1, activity2, activity3, state1, state2, state3 }) {
  return (
    <>
      <Link className={activity1} href="/admin">
        <Image src={User} alt="user management" />
        <p className={state1}>User Management</p>
      </Link>
      <Link className={activity2} href="/applications">
        <Image src={Application} alt="applications" />
        <p className={state2}>Applications</p>
      </Link>
      <Link className={activity3} href="/settings">
        <Image src={Settings} alt="settings" />
        <p className={state3}>Settings</p>
      </Link>
    </>
  );
}

function LinkPanelDashboard({ User, role, Application, activity1, activity2, activity3, state1, state2, state3 }) {
  return (
    <>
      <Link className={activity1} href="/dashboard">
        <Image src={Application} alt="applications" />
        <p className={state1}>Dashboard</p>
      </Link>
      {role === "admin" && (
        <Link className={activity2} href="/admin">
          <Image src={User} alt="user management" />
          <p className={state2}>Admin Interface</p>
        </Link>
      )}
      <Link className={activity3} href="/settings">
        <Image src={Settings} alt="settings" />
        <p className={state3}>Settings</p>
      </Link>
    </>
  );
}

function LeftPanel({ page, mode, activity1, activity2, activity3, state1, state2, state3 }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function getProfileDetails() {
      const { name, email, role } = await handleGetSessionDetailsFlow();
      setName(name);
      setEmail(email);
      setRole(role);
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
      {mode === "admin" && (
        <LinkPanelAdmin
          User={User}
          Application={Application}
          state1={state1}
          state2={state2}
          state3={state3}
          activity1={activity1}
          activity2={activity2}
          activity3={activity3}
        />
      )}

      {mode === "dashboard" && (
        <LinkPanelDashboard
          User={User}
          role={role}
          Application={Application}
          state1={state1}
          state2={state2}
          state3={state3}
          activity1={activity1}
          activity2={activity2}
          activity3={activity3}
        />
      )}
      <div className="logout centre">
        <div className="logout_image">
          <Image className="logout_image" src={Test} alt="test" />
        </div>
        <div className="logout_text" onClick={() => router.push("settings")}>
          <p style={{ color: "white", fontSize: "1.3rem" }}>{name}</p>
          <p style={{ color: "white" }}>{email}</p>
        </div>
        <IconButton onClick={handleLogout} style={{ cursor: "pointer" }}>
          <Image className="logout_logo" src={Logout} alt="logout" />
        </IconButton>
      </div>
    </div>
  );
}

export default LeftPanel;
