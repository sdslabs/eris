import React, { useState, useEffect } from "react";
import Search from "../public/images/search_icon.svg";
import Image from "next/image";
import data from "../data/users_data.json";
import UserAdd from "../public/images/user_add.svg";
import Filter from "../public/images/filter.svg";
import UserTable from "./user_table";
import { Checkbox } from "@mui/material";
import AdminPage from "../pages/admin";

var currentData=data;
export const Searchbar = ({ type, updateOnSearch}) => {
  
  const [inputActive, setInputActive] = useState(false);
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    e.preventDefault();
    var lowerCase = e.target.value.toLowerCase();
    if(lowerCase!=inputText) 
    {
      console.log("Finally!");
      updateOnSearch(lowerCase);
    }
    setInputText(lowerCase);
  };
  currentData=data;
  console.log("length of input text");
  console.log(inputText);
  console.log(currentData);
  return (
    
    (<div className={"searchbar" + " " + inputActive}  text={"Search user by name or email"}>
    <Image src={Search} alt="user management" />
    <input
    type={type}
    onFocus={() => setInputActive(!inputActive)}
    onBlur={() => setInputActive(!inputActive)}
    onChange={inputHandler}
    value={inputText}
    className="search_input"
    placeholder={"Search user by name or email"}
    >
    </input>
    </div>)
  );
};

export var currentData;