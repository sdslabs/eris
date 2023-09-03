import {React, useEffect, useState} from "react";
import LeftPanel from "../../components/leftPanel";
import { Searchbar, currentData } from "../../components/searchbaradmin";
import Buttons from "../../components/admin_buttons";
import UserTable from "../../components/user_table";
import InvitesTable from "../../components/invites_table";
import UserAdd from "../../public/images/user_add.svg";
import Filter from "../../public/images/filter.svg";
import { AdminRole } from "../../components/admin_role_filter";
import data from "../../data/users_data.json";
import AddUser from "../../components/add_user.js";


const AdminPage = () => {
  // console.log(UTable);
  // const [invitesActive, setInvitesActive] = useState(false);
  const [adminChecked, setAdminChecked] = useState(false);
  const [userChecked, setUserChecked] = useState(false);
  const [userData, setUserData] = useState(data);
  const [totalData, setTotalData] = useState(data);
  const [UTable, setUTable] = useState(<UserTable userData={[]}/>);
  // console.log(UTable);
  function updateOnSearch(inputText){
    var recentData=[];
    if (inputText.length > 0) {
    data.filter((user) => {
      if(user.name.match(inputText)) recentData.push(user);
      return user.name.match(inputText);
    });
    }
    else recentData = data;
    var roleData=[];
    recentData.filter((user) => {
      if(user.role.match("admin")&&adminChecked) roleData.push(user);
      else if(user.role.match("user")&&userChecked) roleData.push(user);
      return user.name.match("admin");
    },);
    console.log(roleData);
    setUserData(roleData);
    setTotalData(recentData);
    setUTable(<UserTable userData={roleData}/>);
    console.log("inside updateOnSearch");
    console.log(recentData);
  }

function AdminRole ( role ) {
  var roleData=[];
  // var totalData = userData + otherData;
  // setOtherData([]);
  console.log("inside AdminRole");
  console.log(totalData);
  totalData.filter((user) => {
    // console.log(user.role);
    // console.log(typeof(user.role));
    var adminm = String("admin");
    var userm = String("user");
    // console.log(typeof(userm));
    // console.log(adminChecked);
    if((user.role==adminm)&&(adminChecked||(role==adminm))) roleData.push(user);
    else if((user.role==userm)&&(userChecked||(role==userm))) roleData.push(user);
    else console.log("No");
    // console.log(user.role==adminm);
    return user.role.match("admin");
  },);
  console.log(roleData);
  setUserData(roleData);
  setUTable(<UserTable userData={roleData}/>);
  console.log("UTable details");
  console.log(UTable);
};
// function getUTable() {
//   console.log("Nehaaa");
//   setUTable(UTable);
// }
// useEffect(() => {
//   getUTable}, [UTable]);
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
    <Searchbar updateOnSearch={updateOnSearch}/>
    <div className="roles">
        <b>Role </b>
        <input type="checkbox" style={{ marginLeft: "1rem" }} id="admin_role" onChange={()=>{setAdminChecked(!adminChecked); AdminRole("admin")}}/> Admin
        <input type="checkbox" style={{ marginLeft: "2rem" }} id="user_role" onChange={()=>{setUserChecked(!userChecked); AdminRole("user")}}/> User
      </div>
    <Buttons
      text1="Filter"
      text2="Add User"
      img1={Filter}
      img2={UserAdd}/>
    </div></div>
    <div className="data_div">
      {UTable}
    </div>
    </div> 
  );
};

export default AdminPage;