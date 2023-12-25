import React, { useState } from "react";

const Input = ({ type, text, handleChange, children }) => {
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
      />
      {children}
    </div>
  );
};

export default Input;
