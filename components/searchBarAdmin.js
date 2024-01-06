import Image from "next/image";
import React, { useState } from "react";
import data from "../data/users_data.json";
import Search from "../public/images/search_icon.svg";

function SearchBarAdmin({ type, updateOnSearch }) {
  const [inputActive, setInputActive] = useState(false);
  const [inputText, setInputText] = useState("");

  function inputHandler(e) {
    e.preventDefault();
    var lowerCase = e.target.value.toLowerCase();
    if (lowerCase != inputText) {
      updateOnSearch(lowerCase);
    }
    setInputText(lowerCase);
  }

  return (
    <div className={"searchbar" + " " + inputActive} text={"Search user by name or email"}>
      <Image src={Search} alt="user management" />
      <input
        type={type}
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
