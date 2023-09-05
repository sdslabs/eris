import {React, useEffect, useState} from "react";
import LeftPanel from "../../components/leftPanel";
import { Searchbar, currentData } from "../../components/searchbaradmin";
import Buttons from "../../components/admin_buttons";
import UserTable from "../../components/user_table";
import InvitesTable from "../../components/invites_table";
import UserAdd from "../../public/images/user_add.svg";
import Filter from "../../public/images/filter.svg";
import data from "../../data/users_data.json";
import InvitesData from "../../data/invites_data.json";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLinesVertical } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
const line = <FontAwesomeIcon icon={faGripLinesVertical} />;

const AdminPage = () => {
  const [invitesActive, setInvitesActive] = useState(false);
  var ifUserActive, ifInviteActive;
  {invitesActive ? (ifInviteActive="setLine", ifUserActive=null ) : (ifInviteActive=null ,ifUserActive="setLine")}
  const [adminChecked, setAdminChecked] = useState(false);
  const [userChecked, setUserChecked] = useState(false);
  const [activeUser, setActiveUser] = useState(false);
  const [inactiveUser, setInactiveUser] = useState(false);
  const [bannedUser, setBannedUser] = useState(false);
  const [userData, setUserData] = useState([]);
  const [filterDropDown, setShowFilterDropDown] = useState(false);
  const [invitesData, setInviteData] = useState(InvitesData);
  const [userTotalData, setUserTotalData] = useState(data);
  const [UTable, setUTable] = useState(<UserTable userData={[]}/>);
  const [ITable, setITable] = useState(<InvitesTable invitesData={InvitesData}/>);
  console.log("invitesActive");
  console.log(invitesActive);
  function updateOnSearch(inputText){
    var recentData=[];
    if (inputText.length > 0) {
      if(!invitesActive) {
        data.filter((user) => {
      if(user.name.match(inputText)) recentData.push(user);
      return user.name.match(inputText);
    });
    }
    else{
      InvitesData.filter((user) => {
        if(user.name.match(inputText)) recentData.push(user);
        return user.name.match(inputText);
      });
    }
  }
    else if(!invitesActive) recentData = data;
    else recentData = InvitesData;
    if(!invitesActive) {
      var roleData=[];
      recentData.filter((user) => {
      if(user.role.match("admin")&&adminChecked) roleData.push(user);
      else if(user.role.match("user")&&userChecked) roleData.push(user);
      return user.name.match("admin");
    },);
    var filterData=[];
    roleData.filter((user) => {
      if(user.userstatus==1&&activeUser) filterData.push(user);
      else if(user.userstatus==2&&inactiveUser) filterData.push(user);
      else if(user.userstatus==0&&bannedUser) filterData.push(user);
      return user.name.match("admin");
    },);
    console.log("roleData");
    console.log(roleData);
    setUserData(filterData);
    setUserTotalData(recentData);
    setUTable(<UserTable userData={filterData} filterDropDown={filterDropDown}/>);
  }
  else{
    setInviteData(recentData);
    console.log("roleData invite");
    console.log(roleData);
    setITable(<InvitesTable invitesData={recentData} filterDropDown={filterDropDown}/>);
  }
    console.log(roleData);
    console.log("inside updateOnSearch");
    console.log(recentData);
  }

  function setTableFilter(filterDropDown)
  {
    if(!invitesActive) setUTable(<UserTable userData={userData} filterDropDown={filterDropDown}/>);
    else setITable(<InvitesTable invitesData={invitesData} filterDropDown={filterDropDown}/>);
  }

  function Userfilter(type)
  {
    var roleData=[];
      userTotalData.filter((user) => {
      if(user.role.match("admin")&&adminChecked) roleData.push(user);
      else if(user.role.match("user")&&userChecked) roleData.push(user);
      return user.name.match("admin");
    },);
    var filterData=[];
    if(type=="apply") {
      roleData.filter((user) => {
        console.log(user.userstatus);
        if(user.userstatus==1&&activeUser) filterData.push(user);
        else if(user.userstatus==2&&inactiveUser) filterData.push(user);
        else if(user.userstatus==0&&bannedUser) filterData.push(user);
      return user.name.match("admin");
    },);
  }
  setUserData(filterData);
  setUTable(<UserTable userData={filterData} filterDropDown={filterDropDown}/>);
  }

function AdminRole ( role ) {
  var roleData=[];
  console.log("inside AdminRole");
  console.log(userTotalData);
  userTotalData.filter((user) => {
    var adminm = String("admin");
    var userm = String("user");
    var adminCheckedVal=adminChecked;
    if (role==adminm) {
      adminCheckedVal=!adminChecked
    }
    var userCheckedVal=userChecked;
    if (role==userm) {
      userCheckedVal=!userChecked
    }
    if((user.role==adminm)&&(adminCheckedVal)) roleData.push(user);
    else if((user.role==userm)&&(userCheckedVal)) roleData.push(user);
    else console.log("No");
    return user.role.match("admin");
  },);
  var filterData=[];
    roleData.filter((user) => {
      console.log(user.userstatus);
      if(user.userstatus==1&&activeUser) filterData.push(user);
      else if(user.userstatus==2&&inactiveUser) filterData.push(user);
      else if(user.userstatus==0&&bannedUser) filterData.push(user);
      return user.name.match("admin");
    },);
  console.log(roleData);
  setUserData(filterData);
  setUTable(<UserTable userData={filterData} filterDropDown={filterDropDown}/>);
  console.log("UTable details");
  console.log(UTable);
};

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
    <div className={`toggle_items ${ifUserActive}`} style={{marginLeft: "3rem"}} onClick={()=>setInvitesActive(false)}>Users</div>
    <div className={`toggle_items ${ifInviteActive}`} onClick={()=>setInvitesActive(true)}>Invites</div>
    </div>
    <hr className="admin_hr"/>
    <div className="search_panel">
    <Searchbar updateOnSearch={updateOnSearch}/>
    {(() => {
      console.log("helllllllllo"); 
      if(!invitesActive){
      return(
    <div className="roles" >
        <b>Role </b>
        <input type="checkbox" style={{ marginLeft: "1rem" }} id="admin_role" onChange={()=>{setAdminChecked(!adminChecked); AdminRole("admin")}}/> Admin
        <input type="checkbox" style={{ marginLeft: "2rem" }} id="user_role" onChange={()=>{setUserChecked(!userChecked); AdminRole("user")}}/> User
      </div>
      )
}
})()}
    <div className="buttons">
      <>
      {(() => { if(!invitesActive)
      {return (<button className="filter_btn" onClick={()=>{setShowFilterDropDown(!filterDropDown), setTableFilter(!filterDropDown)}}>
          <Image style={{marginRight: "8px"}} src={Filter} alt="user management" />
            {"Filter"}
        </button>
      )}})()}
        </>
        <button className="add_user_btn">
            <Image style={{marginRight: "8px"}} src={UserAdd} alt="user management" />
            {"Add User"}
        </button>
    </div>
    </div>
    <div className="data_div">
    <>{(() => {
      console.log("hii"); 
      if(filterDropDown&&(!invitesActive)){
      return(
        <>
        <div id="filterDropdown" class="dropdown-content">
          <div><input type="checkbox" id="user_active" onChange={()=>{setActiveUser(!activeUser)}}/> Active User</div>
          <div><input type="checkbox" id="user_inactive" onChange={()=>{setInactiveUser(!inactiveUser)}}/> Inactive User</div>
          <div><input type="checkbox" id="user_banned" onChange={()=>{setBannedUser(!bannedUser)}}/> Banned User</div>
          <div><button id="apply_filter" onClick={()=>{Userfilter("apply")}}>
          {/* <Image style={{marginRight: "8px"}} src={ApplyFilter} alt="user management" /> */}
            {"Apply Filter"}
            </button></div>
            <div><button id="reset_filter" onClick={()=>{Userfilter("reset")}}>
          {/* <Image style={{marginRight: "8px"}} src={ResetFilter} alt="user management" /> */}
            {"Reset Filter"}
            </button></div>
      </div></>
      )
}
})()}</>
      {/* {UTable} */}
    {invitesActive ? ITable : UTable}
    
    </div>
    </div> </div>
  );
};

export default AdminPage;