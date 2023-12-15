import React from "react";

const ButtonPopup = ({ text, func, err1,err2, password , confirmedPassword}) => {
  return (
    <div>
    <button type="submit" className="button_popup" onClick={func} disabled={((err1)+(err2)) || password=="" || confirmedPassword==0}>
      {text}
    </button>
    </div>
  );
};

export default ButtonPopup;

