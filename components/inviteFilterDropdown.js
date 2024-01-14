import FilterOption from "./filterOptions";
import FilterButton from "./filterButton";

function InviteFilterDropdown({ dispatch, acceptedUsers, pendingUsers, handleInviteFilter }) {
  function handleAcceptedUsers() {
    dispatch({ type: "setAcceptUserCheck" });
  }

  function handlePendingUsers() {
    dispatch({ type: "setPendingUserCheck" });
  }

  function handleApplyFilter() {
    handleInviteFilter("apply");
  }
  function handleResetFilter() {
    handleInviteFilter("reset");
  }

  return (
    <div id="filterDropdown" class="dropdown-content">
      <FilterOption text="Accepted User" id="user_accepted" state={acceptedUsers} handleChange={handleAcceptedUsers} />
      <FilterOption text="Pending User" id="user_pending" state={pendingUsers} handleChange={handlePendingUsers} />

      <FilterButton text="Apply Filter" id="apply_filter" handleChange={handleApplyFilter} />
      <FilterButton text="Reset Filter" id="reset_filter" handleChange={handleResetFilter} />
    </div>
  );
}

export default InviteFilterDropdown;
