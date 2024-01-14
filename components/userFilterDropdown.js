import FilterOption from "./filterOptions";
import FilterButton from "./filterButton";

function UserFilterDropdown({ dispatch, activeUsers, inactiveUsers, bannedUsers, handleUserFilter }) {
  function handleActiveUsers() {
    dispatch({ type: "setActiveUsers" });
  }

  function handleInactiveUsers() {
    dispatch({ type: "setInactiveUsers" });
  }

  function handleBannedUsers() {
    dispatch({ type: "setBannedUsers" });
  }

  function handleApplyFilter() {
    handleUserFilter("apply");
  }
  function handleResetFilter() {
    handleUserFilter("reset");
  }

  return (
    <div id="filterDropdown" class="dropdown-content">
      <FilterOption text="Active User" id="user_active" state={activeUsers} handleChange={handleActiveUsers} />
      <FilterOption text="Inactive User" id="user_inactive" state={inactiveUsers} handleChange={handleInactiveUsers} />
      <FilterOption text="Banned User" id="user_banned" state={bannedUsers} handleChange={handleBannedUsers} />

      <FilterButton text="Apply Filter" id="apply_filter" handleChange={handleApplyFilter} />
      <FilterButton text="Reset Filter" id="reset_filter" handleChange={handleResetFilter} />
    </div>
  );
}

export default UserFilterDropdown;
