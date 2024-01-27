import React, { useState } from "react";

function Input({ name, type, text, handleChange, handleKeyUp, children, value }) {
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
        value={value}
      />
      {children}
    </div>
  );
}

export default Input;
