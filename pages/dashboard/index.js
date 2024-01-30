import { useRouter } from "next/router";
import { React, useState } from "react";
import { handleGetLogoutFlow, handlePostLogoutFlow } from "../../api/logoutFlow";
import LeftPanel from "../../components/leftPanel";

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
      <LeftPanel
        page={"dashboard"}
        mode={"dashboard"}
        activity1={"active"}
        activity2={"inactive"}
        activity3={"inactive"}
        state1={"used"}
        state2={"unused"}
        state3={"unused"}
      />
      <div className="right_panel">
        <div className="active">
          <button className="button_submit" onClick={handleLogout}>
            Logout
          </button>
          <p className="text-danger">{logoutError}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
