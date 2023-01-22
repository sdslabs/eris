import React from "react";
import LeftPanel from "../../components/leftPanel";
import Searchbar from "../../components/searchbar";
import Buttons from "../../components/admin_buttons"

const AdminPage = ({ refs }) => {
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
    <div style={{marginLeft: "3rem"}}>Users</div>
    <div style={{marginLeft: "2rem"}}>Invites</div>
    </div>
    <hr className="admin_hr"/>
    <div className="search_panel">
    <Searchbar 
    text={"Search user by name or email"}/>
    <Buttons />
    </div>
    <div className="users_data">
  
    </div>
    </div>
</div>
  );
};

export default AdminPage;