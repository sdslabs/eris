import {React, useState} from "react";
import LeftPanel from "../../components/leftPanel";
import { Searchbar } from "../../components/searchbaradmin";
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
    <div className="toggle_items" style={{marginLeft: "3rem"}}>Users</div>
    <div className="toggle_items">Invites</div>
    </div>
    <hr className="admin_hr"/>
    <div className="search_panel">
    <Searchbar
    text={"Search user by name or email"}/>
    </div>
    </div>
</div>
  );
};

export default AdminPage;