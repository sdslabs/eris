import {React, useState} from "react";
import LeftPanel from "../../components/leftPanel";
import Searchbar from "../../components/searchbar";
import Buttons from "../../components/admin_buttons";
import UserTable from "../../components/user_table";
import InvitesTable from "../../components/invites_table";
import UserAdd from "../../public/images/user_add.svg";
import Filter from "../../public/images/filter.svg";

const AdminPage = () => {
  const [invitesActive, setInvitesActive] = useState(false);
return (
<div>
    <div className="left_panel">
    <LeftPanel
        activity1={"active"}
        activity2={"inactive"}
        activity3={"inactive"}
        state1={"used"}
        state2={"unused"}
        state3={"unused"}/>
    </div>
    <div className="right_panel">
    <h1 className="admin_heading">User Management</h1>
    <div className="admin_toggle">
    <div className={`toggle_items ${invitesActive ? "" : "setLine"}`} style={{marginLeft: "3rem"}} onClick={()=>setInvitesActive(false)}>Users</div>
    <div className={`toggle_items ${invitesActive ? "setLine" : ""}`} onClick={()=>setInvitesActive(true)}>Invites</div>
    </div>
    <hr className="admin_hr"/>
    <div className="search_panel">
    <Searchbar
    text={"Search user by name or email"}/>
    <div className="roles">
      <b>Role </b>
      <input type="checkbox" style={{marginLeft:"1rem"}} /> Admin
      <input type="checkbox" style={{marginLeft:"2rem"}} /> User
    </div>
    <Buttons
      filter_text="Filter"
      addu_text="Add User"
      filter_image={Filter}
      addu_image={UserAdd}/>
    </div>
    <div className="data_div">
    {invitesActive ? <InvitesTable /> : <UserTable />}
    </div>
    </div>
</div>
  );
};

export default AdminPage;
