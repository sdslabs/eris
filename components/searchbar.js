import React, { useState } from "react";
import Search from "../public/images/search_icon.svg";
import Image from "next/image";
import data from "../data/users_data.json"

const Searchbar = ({ type, text}) => {
  const [inputActive, setInputActive] = useState(false);
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    e.preventDefault();
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  console.log(inputText);
  if (inputText.length > 0) {
    data.filter((user) => {
    return user.name.match(inputText);
});
}
  return (
    <div className={"searchbar" + " " + inputActive}>
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
  );
};

export default Searchbar;


