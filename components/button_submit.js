import React from "react";

const ButtonSubmit = ({ text, func, password, confirmed}) => {
  return (
    <div>
    <button type="submit" className="button_submit" onClick={func} disabled={!((password == confirmed) && (password))}>
      {text}
    </button>
    </div>
  );
};

export default ButtonSubmit;

