import React from "react";
import LeftPanel from "../../components/leftPanel";
import Searchbar from "../../components/searchbar";
import Buttons from "../../components/admin_buttons"
import Apps from "../../components/apps"
import AppBox from "../../components/appBox"
import Sort from "../../public/images/sort.svg"
import AppAdd from "../../public/images/app_add.svg"
import Test from "../../public/images/gasper.png"
import Gasper from "../../public/images/gasper.png"
import Quizio from "../../public/images/quizio.svg"

const AdminPage = ({ refs }) => {
return (
<div>
    <div className="left_panel">
    <LeftPanel
        page = {"applications"}
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
    text1="Sort"
    text2="Add App"
    img1={Sort}
    img2={AppAdd}/>
    </div>
    <div className="applications">
    <div className="application_list">
    <Apps
    id= "1"
    img={Quizio}
    name="Quizio" />
       <Apps
    id= "2"
    img={Gasper}
    name="Gasper" />
       <Apps
    img={Test}
    name="Erdos" />
       <Apps
    id= "3"
    img={Test}
    name="Rootex" />
       <Apps
    id= "4"
    img={Test}
    name="Gasper" />
       <Apps
    id= "5"
    img={Test}
    name="Cerebro" />
    </div>
    <div className="application_data">
    <AppBox
    img={Test}
    name="Quizio"
    des="App1"
    href="quizio.com/profile"
    domains="http://localhost:5005, sdslabs.co"
    organisations={["SDSLabs", "DSG"]}
    clkey="blabla"
    clsecret="topsecret"/>
    </div>
    </div>
    </div>
</div>
  );
};

export default AdminPage;
