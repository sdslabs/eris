import React from "react";
import LeftPanel from "../../components/leftPanel";
import Searchbar from "../../components/searchbar";
import Buttons from "../../components/admin_buttons"
import Apps from "../../components/apps"
import AppBox from "../../components/appBox"
import Sort from "../../public/images/sort.svg"
import AppAdd from "../../public/images/app_add.svg"
import Test from "../../public/images/test.jpg"

const AdminPage = () => {
return (
<div>
    <div className="left_panel">
    <LeftPanel
        activity1={"inactive"}
        activity2={"active"}
        activity3={"inactive"}
        state1={"unused"}
        state2={"used"}
        state3={"unused"}/>
    </div>
    <div className="right_panel">
    <h1 className="admin_heading">Applications</h1>
    <div className="search_panel">
    <Searchbar
    text={"Search application"}/>
    <Buttons
    filter_text="Sort"
    addu_text="Add App"
    filter_image={Sort}
    addu_image={AppAdd}/>
    </div>
    <div className="applications">
    <div className="application_list">
    <Apps
    img={Test}
    name="Quizio" />
       <Apps
    img={Test}
    name="Quizio" />
       <Apps
    img={Test}
    name="Quizio" />
       <Apps
    img={Test}
    name="Quizio" />
       <Apps
    img={Test}
    name="Quizio" />
       <Apps
    img={Test}
    name="Quizio" />
       <Apps
    img={Test}
    name="Quizio" />
       <Apps
    img={Test}
    name="Quizio" />
       <Apps
    img={Test}
    name="Quizio" />
    </div>
    <div className="application_data">
    <AppBox
    img={Test}
    name="Quizio"
    des="App1"
    href="quizio.com/profile"/>
    </div>
    </div>
    </div>
</div>
  );
};

export default AdminPage;
