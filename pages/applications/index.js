import React from "react";
import LeftPanel from "../../components/leftPanel";
import Searchbar from "../../components/searchbar";
import Buttons from "../../components/admin_buttons"
import UserData from "../../components/user_table"
import Sort from "../../public/images/sort.svg"
import AppAdd from "../../public/images/app_add.svg"

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
    <h1 className="admin_heading">Applications</h1>
    <div className="search_panel">
    <Searchbar 
    text={"Search user by name or email"}/>
    <Buttons 
    text1="Sort"
    text2="Add App" 
    img1={Sort}
    img2={AppAdd}/>
    </div>
    <div className="users_data">
    {/* <UserData /> */}
    </div>
    </div>
</div>
  );
};

export default AdminPage;