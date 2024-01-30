import Image from "next/image";
import React, { useState } from "react";
import Search from "../public/images/search_icon.svg";

function SearchBarAdmin({ invitesActive, totalUserData, totalInviteData, filterUserData, filterInviteData }) {
  const [inputActive, setInputActive] = useState(false);
  const [inputText, setInputText] = useState("");

  function updateOnSearch(inputText) {
    var recentData = [];
    inputText = inputText.trim();
    if (inputText.length > 0) {
      if (!invitesActive) {
        recentData = totalUserData.filter((identity) => identity.traits.name.toLowerCase().includes(inputText));
      } else {
        recentData = totalInviteData.filter((identity) => identity.traits.name.toLowerCase().includes(inputText));
      }
    } else if (!invitesActive) {
      recentData = totalUserData;
    } else {
      recentData = totalInviteData;
    }

    if (!invitesActive) {
      filterUserData(recentData);
    } else {
      filterInviteData(recentData);
    }
  }

  function inputHandler(e) {
    e.preventDefault();
    var searchText = e.target.value.toLowerCase();
    if (searchText != inputText) {
      updateOnSearch(searchText);
    }
    setInputText(searchText);
  }

  return (
    <div className={"searchbar" + " " + inputActive} text={"Search user by name or email"}>
      <Image src={Search} alt="user management" />
      <input
        type="text"
        onFocus={() => setInputActive(!inputActive)}
        onBlur={() => setInputActive(!inputActive)}
        onChange={inputHandler}
        value={inputText}
        className="search_input"
        placeholder={"Search user by name or email"}
      ></input>
    </div>
  );
}

export default SearchBarAdmin;
