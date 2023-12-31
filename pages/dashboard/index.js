import { React, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { handleGetLogoutFlow, handlePostLogoutFlow } from "../../api/logoutFlow";

function Dashboard() {
  const router = useRouter();
  const [logoutError, setLogoutError] = useState("");

  async function handleLogout() {
    try {
      const logoutToken = await handleGetLogoutFlow();
      await handlePostLogoutFlow(logoutToken);
      router.push("/");
    } catch (err) {
      console.error(err);
      setLogoutError("Logout failed. Try again.");
    }
  }

  return (
    <div>
      <div className="active">
        <Link className=" underline green" href="/settings" style={{ float: "right" }}>
          Settings
        </Link>
        <button className="button_submit" onClick={handleLogout}>
          Logout
        </button>
        <p className="text-danger">{logoutError}</p>
      </div>
    </div>
  );
}

export default Dashboard;
