import React from "react";

const ButtonSubmit = ({ text, func}) => {

  return (
    <div>
    <button type="submit" className="button_submit" onClick={func} >
      {text}
    </button>
    </div>
  );
};

export default ButtonSubmit;

