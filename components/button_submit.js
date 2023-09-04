import React from "react";

const ButtonSubmit = ({ text, func, err1,err2, password , confirmedPassword}) => {
  return (
    <div>
    <button type="submit" className="button_submit" onClick={func} disabled={((err1)+(err2)) || password=="" || confirmedPassword==0}>
      {text}
    </button>
    </div>
  );
};

export default ButtonSubmit;

