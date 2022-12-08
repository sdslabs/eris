import React, { useState } from "react";

const Button2 = ({ text, type, onClick }) => {
//const [buttonActive, setButtonActive] = useState(false);

  return (
    <button 
    className="button2"
      //onClick={() => setButtonActive(!buttonActive)}
      //className={"button2"+ " " + buttonActive}
    >
      <p>{text}</p>
    </button>
  );
};

export default Button2;

