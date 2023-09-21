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
  const [filterInviteDropDown, setFilterInviteDropDown] = useState(false);
  const [acceptedUser, setAcceptedUser] = useState(false);
  const [pendingUser, setPendingUser] = useState(false);
  const [invitesData, setInviteData] = useState([]);
  const [invitesTotalData, setInvitesTotalData] = useState(InvitesData);
  const [userTotalData, setUserTotalData] = useState(data);
  const [UTable, setUTable] = useState(<UserTable userData={[]} filterDropDown={false}/>);
  const [ITable, setITable] = useState(<InvitesTable invitesData={[]} filterDropDown={false}/>);
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
    setUserData(filterData);
    setUserTotalData(recentData);
    setUTable(<UserTable userData={filterData} filterDropDown={filterDropDown}/>);
  }
  else{
    recentData.filter((user) => {
      if(user.invitestatus==0&&pendingUser) filterData.push(user);
      else if(user.invitestatus==1&&acceptedUser) filterData.push(user);
    return user.name.match("admin");
  },);
    setInvitesTotalData(recentData);
    setInviteData(filterData);
    setITable(<InvitesTable invitesData={recentData} filterDropDown={filterInviteDropDown}/>);
  }
  }

  function setTableFilter(filterDropDown)
  {
    if(!invitesActive) setUTable(<UserTable userData={userData} filterDropDown={filterDropDown}/>);
    else setITable(<InvitesTable invitesData={invitesData} filterDropDown={filterInviteDropDown}/>);
  }

  function setInviteTableFilter (filterInviteDropDown)
  {
    if(!invitesActive) setUTable(<UserTable userData={userData} filterDropDown={filterDropDown}/>);
    else setITable(<InvitesTable invitesData={invitesData} filterDropDown={filterInviteDropDown}/>);
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
        if(user.userstatus==1&&activeUser) filterData.push(user);
        else if(user.userstatus==2&&inactiveUser) filterData.push(user);
        else if(user.userstatus==0&&bannedUser) filterData.push(user);
      return user.name.match("admin");
    },);
  }
  else{
    setActiveUser(false);
    setInactiveUser(false);
    setBannedUser(false);
  }
  setUserData(filterData);
  setUTable(<UserTable userData={filterData} filterDropDown={filterDropDown}/>);
  }
  function Invitefilter(type)
  {
    var filterData=[];
    if(type=="apply") {
      invitesTotalData.filter((user) => {
        if(user.invitestatus==0&&pendingUser) filterData.push(user);
        else if(user.invitestatus==1&&acceptedUser) filterData.push(user);
      return user.name.match("admin");
    },);
  }
  else{
    setAcceptedUser(false);
    setPendingUser(false);
  }
  setInviteData(filterData);
  setITable(<InvitesTable invitesData={filterData} filterDropDown={filterInviteDropDown}/>);
  }

function AdminRole ( role ) {
  var roleData=[];
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
    return user.role.match("admin");
  },);
  var filterData=[];
    roleData.filter((user) => {
      if(user.userstatus==1&&activeUser) filterData.push(user);
      else if(user.userstatus==2&&inactiveUser) filterData.push(user);
      else if(user.userstatus==0&&bannedUser) filterData.push(user);
      return user.name.match("admin");
    },);
  setUserData(filterData);
  setUTable(<UserTable userData={filterData} filterDropDown={filterDropDown}/>);
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
      {(() => { 
        if(!invitesActive)
      {return (<button className="filter_btn" onClick={()=>{setShowFilterDropDown(!filterDropDown), setTableFilter(!filterDropDown)}}>
          <Image style={{marginRight: "8px"}} src={Filter} alt="user management" />
            {"Filter"}
        </button>
      )}
      else {return (<button className="filter_btn" onClick={()=>{setFilterInviteDropDown(!filterInviteDropDown), setInviteTableFilter(!filterInviteDropDown)}}>
          <Image style={{marginRight: "8px"}} src={Filter} alt="user management" />
            {"Filter"}
        </button>
      )}
      })()}
        </>
        <button className="add_user_btn">
            <Image style={{marginRight: "8px"}} src={UserAdd} alt="user management" />
            {"Add User"}
        </button>
    </div>
    </div>
    <div className="data_div">
    <>{(() => {
      if(filterDropDown&&(!invitesActive)){
      return(
        <>
        <div id="filterDropdown" class="dropdown-content">
          <div>{(() => {
      if(activeUser){
      return(<input type="checkbox" id="user_active" onChange={()=>{setActiveUser(!activeUser)}} checked="true"/>)
    }
    else{
      return(<input type="checkbox" id="user_active" onChange={()=>{setActiveUser(!activeUser)}}/>)
    }
    })()}Active User</div>
          <div>{(() => {
      if(inactiveUser){
      return(<input type="checkbox" id="user_inactive" onChange={()=>{setInactiveUser(!inactiveUser)}} checked="true"/>)
    }
    else{
      return(<input type="checkbox" id="user_inactive" onChange={()=>{setInactiveUser(!inactiveUser)}}/>)
    }
    })()} Inactive User</div>
          <div>{(() => {
      if(bannedUser){
      return(<input type="checkbox" id="user_banned" onChange={()=>{setBannedUser(!bannedUser)}} checked="true"/>)
    }
    else{
      return(<input type="checkbox" id="user_banned" onChange={()=>{setBannedUser(!bannedUser)}}/>)
    }
    })()}Banned User</div>
          <div><button id="apply_filter" onClick={()=>{Userfilter("apply")}}>
            {"Apply Filter"}
            </button></div>
            <div><button id="reset_filter" onClick={()=>{Userfilter("reset")}}>
            {"Reset Filter"}
            </button></div>
      </div></>
      )
}
else if(filterInviteDropDown&&(invitesActive)){
  return(
    <>
    <div id="filterDropdown" class="dropdown-content">
      <div>{(() => {
  if(acceptedUser){
  return(<input type="checkbox" id="user_accepted" onChange={()=>{setAcceptedUser(!acceptedUser)}} checked="true"/>)
}
else{
  return(<input type="checkbox" id="user_accepted" onChange={()=>{setAcceptedUser(!acceptedUser)}}/>)
}
})()}Accepted User</div>
      <div>{(() => {
  if(pendingUser){
  return(<input type="checkbox" id="user_pending" onChange={()=>{setPendingUser(!pendingUser)}} checked="true"/>)
}
else{
  return(<input type="checkbox" id="user_pending" onChange={()=>{setPendingUser(!pendingUser)}}/>)
}
})()}Pending User</div>
      <div><button id="apply_filter" onClick={()=>{Invitefilter("apply")}}>
        {"Apply Filter"}
        </button></div>
        <div><button id="reset_filter" onClick={()=>{Invitefilter("reset")}}>
        {"Reset Filter"}
        </button></div>
  </div></>
  )
}
}
)()}</>
    {invitesActive ? ITable : UTable}
    
    </div>
    </div> </div>
  );
};

export default AdminPage;