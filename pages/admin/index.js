import { React, useEffect, useReducer } from "react";
import { handleGetIdentitiesFlow } from "../../api/adminFlow";
import AddUserForm from "../../components/addUserForm";
import InviteFilterDropdown from "../../components/inviteFilterDropdown";
import InvitesPanel from "../../components/invitePanel";
import InvitesTable from "../../components/invitesTable";
import LeftPanel from "../../components/leftPanel";
import SearchBarAdmin from "../../components/searchBarAdmin";
import UserFilterDropdown from "../../components/userFilterDropdown";
import UserTable from "../../components/userTable";
import UsersPanel from "../../components/usersPanel";

const initialState = {
  invitesActive: false,
  totalUserData: [],
  currentUserData: [],
  currentUserFilteredData: [],
  adminChecked: false,
  userChecked: false,
  activeUsers: false,
  inactiveUsers: false,
  bannedUsers: false,
  userFilterDropdown: false,
  totalInviteData: [],
  currentInviteData: [],
  acceptedUser: false,
  pendingUsers: false,
  inviteFilterDropdown: false,
  addUserFormActive: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "setValue":
      const userIdentities = action.payload.filter((identity) => identity.traits.invite_status === "self_created");
      const inviteIdentities = action.payload.filter(
        (identity) => identity.traits.invite_status === "pending" || identity.traits.invite_status === "accepted"
      );

      return {
        ...initialState,
        totalUserData: userIdentities,
        currentUserData: userIdentities,
        currentUserFilteredData: userIdentities,
        totalInviteData: inviteIdentities,
        currentInviteData: inviteIdentities,
      };
    case "setUserFilter":
      return { ...state, currentUserData: action.payload, currentUserFilteredData: action.payload };
    case "setInviteFilter":
      return { ...state, currentInviteData: action.payload };
    case "setRoleFilter":
      return { ...state, currentUserData: action.payload, currentUserFilteredData: action.payload };
    case "userFilterReset":
      return {
        ...state,
        activeUsers: false,
        inactiveUsers: false,
        bannedUsers: false,
        adminChecked: false,
        userChecked: false,
        currentUserData: state.totalUserData,
        currentUserFilteredData: state.totalUserData,
      };
    case "inviteFilterReset":
      return { ...state, acceptedUser: false, pendingUsers: false, currentInviteData: state.totalInviteData };
    case "setInviteActive":
      return { ...state, invitesActive: true };
    case "setUserActive":
      return { ...state, invitesActive: false };
    case "setUserFilterDropdown":
      return { ...state, userFilterDropdown: !state.userFilterDropdown };
    case "setInviteFilterDropdown":
      return { ...state, inviteFilterDropdown: !state.inviteFilterDropdown };
    case "setAdminChecked":
      return { ...state, adminChecked: !state.adminChecked };
    case "setUserChecked":
      return { ...state, userChecked: !state.userChecked };
    case "setActiveUsers":
      return { ...state, activeUsers: !state.activeUsers };
    case "setInactiveUsers":
      return { ...state, inactiveUsers: !state.inactiveUsers };
    case "setBannedUsers":
      return { ...state, bannedUsers: !state.bannedUsers };
    case "setAcceptUserCheck":
      return { ...state, acceptedUsers: !state.acceptedUsers };
    case "setPendingUserCheck":
      return { ...state, pendingUsers: !state.pendingUsers };
    case "showAddUserForm":
      return { ...state, addUserFormActive: !state.addUserFormActive };
  }
}

function AdminPage() {
  const [
    {
      invitesActive,
      totalUserData,
      currentUserData,
      currentUserFilteredData,
      adminChecked,
      userChecked,
      activeUsers,
      inactiveUsers,
      bannedUsers,
      userFilterDropdown,
      totalInviteData,
      currentInviteData,
      acceptedUser,
      pendingUsers,
      inviteFilterDropdown,
      addUserFormActive,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getIdentities() {
      try {
        const identities = await handleGetIdentitiesFlow();
        dispatch({ type: "setValue", payload: identities });
      } catch (error) {
        console.error(error);
      }
    }
    getIdentities();
  }, []);

  function filterUserData(recentData) {
    const roleData = recentData.filter((identity) => {
      if (identity.traits.role === "user" && userChecked) {
        return identity;
      } else if (identity.traits.role == "admin" && adminChecked) {
        return identity;
      } else if (!userChecked && !adminChecked) {
        return identity;
      }
    });

    const filteredData = roleData.filter((identity) => {
      if (activeUsers && identity.state === "active") {
        return identity;
      } else if (bannedUsers && identity.state === "inactive") {
        return identity;
      } else if (!activeUsers && !bannedUsers) {
        return identity;
      }
    });

    dispatch({ type: "setUserFilter", payload: filteredData });
  }

  function filterInviteData(recentData) {
    const filteredData = recentData.filter((identity) => {
      if (pendingUsers && identity.traits.invite_status === "pending") {
        return identity;
      } else if (acceptedUser && identity.traits.invite_status === "accepted") {
        return identity;
      } else if (!acceptedUser && !pendingUsers) {
        return identity;
      }
    });

    dispatch({ type: "setInviteFilter", payload: filteredData });
  }

  function handleUserFilter(type) {
    if (type === "apply") {
      filterUserData(totalUserData);
    } else {
      dispatch({ type: "userFilterReset" });
    }
    dispatch({ type: "setUserFilterDropdown" });
  }

  function handleInviteFilter(type) {
    if (type === "apply") {
      filterInviteData(totalInviteData);
    } else {
      dispatch({ type: "inviteFilterReset" });
    }
    dispatch({ type: "setInviteFilterDropdown" });
  }

  function handleRoleCheckboxes(role) {
    let adminC, userC;
    console.log(currentUserFilteredData);
    if (role == "admin") {
      adminC = adminChecked ? false : true;
      userC = userChecked;
    } else {
      userC = userChecked ? false : true;
      adminC = adminChecked;
    }
    const roleData = totalUserData.filter((identity) => {
      if (identity.traits.role === "user" && userC) {
        return identity;
      } else if (identity.traits.role == "admin" && adminC) {
        return identity;
      } else if (!userC && !adminC) {
        return identity;
      }
    });

    dispatch({ type: "setRoleFilter", payload: roleData });
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
            onClick={() => dispatch({ type: "setUserActive" })}
          >
            Users
          </div>
          <div
            className={`toggle_items ${invitesActive ? "setLine" : ""}`}
            onClick={() => dispatch({ type: "setInviteActive" })}
          >
            Invites
          </div>
        </div>
        <hr className="admin_hr" />
        <div className="search_panel">
          <SearchBarAdmin
            invitesActive={invitesActive}
            totalUserData={totalUserData}
            totalInviteData={totalInviteData}
            filterUserData={filterUserData}
            filterInviteData={filterInviteData}
          />
          {invitesActive ? (
            <InvitesPanel dispatch={dispatch} />
          ) : (
            <UsersPanel
              userChecked={userChecked}
              adminChecked={adminChecked}
              dispatch={dispatch}
              handleRoleCheckboxes={handleRoleCheckboxes}
            />
          )}
        </div>
        <div className="data_div">
          {addUserFormActive ? (
            <AddUserForm dispatch={dispatch} />
          ) : (
            <div>
              {invitesActive ? (
                <InvitesTable invitesData={currentInviteData} />
              ) : (
                <UserTable userData={currentUserData} />
              )}
            </div>
          )}
          <div>
            {userFilterDropdown && !invitesActive ? (
              <UserFilterDropdown
                dispatch={dispatch}
                activeUsers={activeUsers}
                inactiveUsers={inactiveUsers}
                bannedUsers={bannedUsers}
                handleUserFilter={handleUserFilter}
              />
            ) : null}
            {inviteFilterDropdown && invitesActive ? (
              <InviteFilterDropdown
                dispatch={dispatch}
                acceptedUsers={acceptedUser}
                pendingUsers={pendingUsers}
                handleInviteFilter={handleInviteFilter}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
