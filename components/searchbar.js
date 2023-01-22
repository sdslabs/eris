import React, { useState } from "react";
import Search from "../public/images/search_icon.svg";
import Image from "next/image";

const Searchbar = ({ type, text}) => {
  const [inputActive, setInputActive] = useState(false);
  
  return (
    <div className={"searchbar" + " " + inputActive}>
    <Image src={Search} alt="user management" />
    <input 
    
    type={type}
    onFocus={() => setInputActive(!inputActive)}
    onBlur={() => setInputActive(!inputActive)}
    className="search_input"
    placeholder={text}
    >
    </input>
    </div>
  );
};

export default Searchbar;


