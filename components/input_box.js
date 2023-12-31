import React, { useState } from "react";

const Input = ({ name, type, text, handleChange, handleKeyUp, children }) => {
  const [inputActive, setInputActive] = useState(false);

  return (
    <div className={"inputBox" + " " + inputActive}>
      <input
        type={type}
        onFocus={() => setInputActive(!inputActive)}
        onBlur={() => setInputActive(!inputActive)}
        className="input"
        placeholder={text}
        onChange={handleChange}
        name={name}
        onKeyUp={handleKeyUp}
      />
      {children}
    </div>
  );
};

export default Input;
