import React, { useState } from "react";

const Input = ({ text, type, onClick }) => {
  const [inputActive, setInputActive] = useState(false);
  
  return (
    <div className={"inputBox" + " " + inputActive}>
    <input 
    type="text"
    onFocus={() => setInputActive(!inputActive)}
    onBlur={() => setInputActive(!inputActive)}
    className="input"
    >
    </input>
    </div>
  );
};

export default Input;


