import React, { useState } from "react";

const Button1 = ({ text, type, onClick }) => {
//const [buttonActive, setButtonActive] = useState(false);

  return (
    <div>
    <button 
    className="button1"
      //onClick={() => setButtonActive(!buttonActive)}
      //className={"button1"+ " " + buttonActive}
    >
      {text}
    </button>
    </div>
  );
};

export default Button1;

