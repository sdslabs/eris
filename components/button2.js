import React, { useState } from "react";

const Button2 = ({ text, type, onClick }) => {
//const [buttonActive, setButtonActive] = useState(false);

  return (
    <div>
    <button 
    className="button2"
      //onClick={() => setButtonActive(!buttonActive)}
      //className={"button2"+ " " + buttonActive}
    >
      {text}
    </button>
    </div>
  );
};

export default Button2;

