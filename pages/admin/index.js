import { React, useEffect, useState } from "react";
import { handleGetIdentitiesFlow } from "../../api/adminFlow";
import InviteFilterDropdown from "../../components/inviteFilterDropdown";
import InvitesPanel from "../../components/invitePanel";
import InvitesTable from "../../components/invites_table";
import LeftPanel from "../../components/leftPanel";
import SearchBarAdmin from "../../components/searchBarAdmin";
import UserFilterDropdown from "../../components/userFilterDropdown";
import UserTable from "../../components/userTable";
import UsersPanel from "../../components/usersPanel";

function AdminPage() {
  //User Data
  const [totalUsersData, setTotalUsersData] = useState([]);
  const [currData, setCurrData] = useState([]);
  const [currFilteredData, setCurrFilteredData] = useState([]);
  //Checkboxes
  const [invitesActive, setInvitesActive] = useState(false);
  const [adminChecked, setAdminChecked] = useState(false);
  const [userChecked, setUserChecked] = useState(false);
  const [activeUser, setActiveUser] = useState(false);
  const [inactiveUser, setInactiveUser] = useState(false);
  const [bannedUser, setBannedUser] = useState(false);
  //Dropdowns
  const [filterDropDown, setShowFilterDropDown] = useState(false);

  //Invites Data
  const [invitesTotalData, setInvitesTotalData] = useState([]);
  const [invitesCurrData, setInvitesCurrData] = useState([]);
  //Checkboxes
  const [acceptedUser, setAcceptedUser] = useState(false);
  const [pendingUser, setPendingUser] = useState(false);
  //Dropdowns
  const [filterInviteDropDown, setFilterInviteDropDown] = useState(false);

  useEffect(() => {
    async function getIdentities() {
      try {
        const identities = await handleGetIdentitiesFlow();
        const userIdentities = identities.filter((identity) => identity.traits.invite_status === "self_created");
        console.log(userIdentities);
        const inviteIdentities = identities.filter(
          (identity) => identity.traits.invite_status === "pending" || identity.traits.invite_status === "accepted"
        );
        console.log(inviteIdentities);

        setTotalUsersData(userIdentities);
        setCurrData(userIdentities);
        setCurrFilteredData(userIdentities);

        setInvitesTotalData(inviteIdentities);
        setInvitesCurrData(inviteIdentities);
      } catch (error) {
        console.error(error);
      }
    }
    getIdentities();
  }, []);

  function updateOnSearch(inputText) {
    console.log(inputText);
    var recentData = [];
    if (inputText.length > 0) {
      if (!invitesActive) {
        recentData = totalUsersData.filter((identity) => {
          if (identity.traits.name.match(inputText)) {
            return identity;
          }
        });
      } else {
        recentData = invitesTotalData.filter((identity) => {
          if (identity.traits.name.match(inputText)) {
            return identity;
          }
        });
      }
    } else if (!invitesActive) {
      recentData = totalUsersData;
    } else {
      recentData = invitesTotalData;
    }

    if (!invitesActive) {
      const roleData = totalUsersData.filter((identity) => {
        if (identity.traits.role === "user" && userChecked) {
          return identity;
        } else if (identity.traits.role == "admin" && adminChecked) {
          return identity;
        } else if (!userChecked && !adminChecked) {
          return identity;
        }
      });

      const filteredData = roleData.filter((identity) => {
        if (activeUser && identity.state === "active") {
          return identity;
        } else if (bannedUser && identity.state === "inactive") {
          return identity;
        } else if (!activeUser && !bannedUser) {
          return identity;
        }
      });
      setCurrFilteredData(filteredData);
      setCurrData(filteredData);
    } else {
      const filteredData = recentData.filter((identity) => {
        if (pendingUser && identity.traits.invite_status === "pending") {
          return identity;
        } else if (acceptedUser && identity.traits.invite_status === "accepted") {
          return identity;
        } else if (!acceptedUser && !pendingUser) {
          return identity;
        }
      });

      setInvitesCurrData(filteredData);
    }
  }

  function userFilter(type) {
    const roleData = totalUsersData.filter((identity) => {
      if (identity.traits.role === "user" && userChecked) {
        return identity;
      } else if (identity.traits.role == "admin" && adminChecked) {
        return identity;
      } else if (!userChecked && !adminChecked) {
        return identity;
      }
    });

    if (type === "apply") {
      const filteredData = roleData.filter((identity) => {
        if (activeUser && identity.state === "active") {
          return identity;
        } else if (bannedUser && identity.state === "inactive") {
          return identity;
        } else if (!activeUser && !bannedUser) {
          return identity;
        }
      });
      setCurrFilteredData(filteredData);
      setCurrData(filteredData);
    } else {
      setActiveUser(false);
      setInactiveUser(false);
      setBannedUser(false);
      setCurrData(totalUsersData);
      setCurrFilteredData(totalUsersData);
    }
  }

  function inviteFilter(type) {
    if (type === "apply") {
      const filteredData = invitesTotalData.filter((identity) => {
        if (pendingUser && identity.traits.invite_status === "pending") {
          return identity;
        } else if (acceptedUser && identity.traits.invite_status === "accepted") {
          return identity;
        } else if (!acceptedUser && !pendingUser) {
          return identity;
        }
      });
      setInvitesCurrData(filteredData);
    } else {
      setAcceptedUser(false);
      setPendingUser(false);
    }
  }

  function AdminRole(role) {
    let adminC, userC;
    if (role == "admin") {
      adminC = adminChecked ? false : true;
      userC = userChecked;
    } else {
      userC = userChecked ? false : true;
      adminC = adminChecked;
    }
    const roleData = currFilteredData.filter((identity) => {
      if (identity.traits.role === "user" && userC) {
        return identity;
      } else if (identity.traits.role == "admin" && adminC) {
        return identity;
      } else if (!userC && !adminC) {
        return identity;
      }
    });

    setCurrData(roleData);
  }

  return (
    <div>
      <LeftPanel
        page={"user"}
        activity1={"active"}
        activity2={"inactive"}
        activity3={"inactive"}
        state1={"used"}
        state2={"unused"}
        state3={"unused"}
      />
      <div className="right_panel">
        <h1 className="admin_heading">User Management</h1>
        <div className="admin_toggle">
          <div
            className={`toggle_items ${invitesActive ? "" : "setLine"}`}
            style={{ marginLeft: "3rem" }}
            onClick={() => setInvitesActive(false)}
          >
            Users
          </div>
          <div className={`toggle_items ${invitesActive ? "setLine" : ""}`} onClick={() => setInvitesActive(true)}>
            Invites
          </div>
        </div>
        <hr className="admin_hr" />
        <div className="search_panel">
          <SearchBarAdmin updateOnSearch={updateOnSearch} />
          {invitesActive ? (
            <InvitesPanel setFilterInviteDropDown={setFilterInviteDropDown} />
          ) : (
            <UsersPanel
              setShowFilterDropDown={setShowFilterDropDown}
              setAdminChecked={setAdminChecked}
              setUserChecked={setUserChecked}
              AdminRole={AdminRole}
            />
          )}
        </div>
        <div className="data_div">
          <div>
            {invitesActive ? (
              <InvitesTable invitesData={invitesCurrData} filterDropDown={false} />
            ) : (
              <UserTable userData={currData} filterDropDown={false} />
            )}
          </div>
          <div>
            {(() => {
              if (filterDropDown && !invitesActive) {
                return (
                  <UserFilterDropdown
                    activeUsers={activeUser}
                    inactiveUsers={inactiveUser}
                    bannedUsers={bannedUser}
                    setActiveUsers={setActiveUser}
                    setInactiveUsers={setInactiveUser}
                    setBannedUsers={setBannedUser}
                    Userfilter={userFilter}
                  />
                );
              } else if (filterInviteDropDown && invitesActive) {
                return (
                  <InviteFilterDropdown
                    setAcceptedUsers={setAcceptedUser}
                    setPendingUsers={setPendingUser}
                    acceptedUsers={acceptedUser}
                    pendingUsers={pendingUser}
                    inviteFilter={inviteFilter}
                  />
                );
              }
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
