import React, { useState } from "react";
import Search from "../public/images/search_icon.svg";
import Image from "next/image";
import data from "../data/users_data.json";
import Buttons from "./admin_buttons";
import UserAdd from "../public/images/user_add.svg";
import Filter from "../public/images/filter.svg";
import UserTable from "./user_table";

var currentData=data;

export const Searchbar = ({ type, text}) => {
  
  const [inputActive, setInputActive] = useState(false);
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    e.preventDefault();
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  currentData=data;
  if (inputText.length > 0) {
    currentData=[];
    let i=0;
    data.filter((user) => {
      if(user.name.match(inputText)) currentData.push(user);
      return user.name.match(inputText);
},);
}
  return (
    <div><div className={"searchbar" + " " + inputActive}>
      <Image src={Search} alt="user management" />
      <input
        type={type}
        onFocus={() => setInputActive(!inputActive)}
        onBlur={() => setInputActive(!inputActive)}
        onChange={inputHandler}
        value={inputText}
        className="search_input"
        placeholder={text}
      >
      </input>
      </div>
      <div className="roles">
        <b>Role </b>
        <input type="checkbox" style={{ marginLeft: "1rem" }} /> Admin
        <input type="checkbox" style={{ marginLeft: "2rem" }} /> User
      </div>
      <Buttons
        text1="Filter"
        text2="Add User"
        img1={Filter}
        img2={UserAdd} />
    <div className="data_div">
        <UserTable />
      </div></div>
  );
};

export var currentData;