import FilterOption from "./filterOptions";
import FilterButton from "./filterButton";

function UserFilterDropdown({
  activeUsers,
  inactiveUsers,
  bannedUsers,
  setActiveUsers,
  setInactiveUsers,
  setBannedUsers,
  Userfilter,
}) {
  function handleActiveUsers() {
    setActiveUsers((old) => !old);
  }

  function handleInactiveUsers() {
    setInactiveUsers((old) => !old);
  }

  function handleBannedUsers() {
    setBannedUsers((old) => !old);
  }

  function handleApplyFilter() {
    Userfilter("apply");
  }
  function handleResetFilter() {
    Userfilter("reset");
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
