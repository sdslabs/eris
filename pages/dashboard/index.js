import { useRouter } from "next/router";
import { React, useState } from "react";
import { handleGetLogoutFlow, handlePostLogoutFlow } from "@/api/logoutFlow";
import LeftPanel from "@/components/leftPanel";
import Announcements from "@/components/announcements";
import sampleAnnouncementsJson from "@/data/announcement_data.json";

function Dashboard() {
  const router = useRouter();
  const [logoutError, setLogoutError] = useState("");

  const sampleAnnouncements = JSON.parse(JSON.stringify(sampleAnnouncementsJson));

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
    <div className="panel_wrapper">
      <LeftPanel
        page={"dashboard"}
        mode={"dashboard"}
        activity1={"active"}
        activity2={"active"}
        activity3={"inactive"}
        state1={"used"}
        state2={"used"}
        state3={"unused"}
      />
      <div className="right_panel">
        <Announcements announcements={sampleAnnouncements} />
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
