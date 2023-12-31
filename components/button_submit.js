import React from "react";

const ButtonSubmit = ({ text, func, err1, err2, email, password, confirmPassword}) => {
  return (
    <div>
    <button type="submit" className="button_submit" onClick={func} disabled={((err1)+(err2)) || password=="" || confirmPassword=="" || email==""}>
      {text}
    </button>
    </div>
  );
};

export default ButtonSubmit;

