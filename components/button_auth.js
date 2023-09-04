import React from "react";
import Image from "next/image";

const ButtonAuth = ({ text, img }) => {

  return (
    <div>
    <button className="button_auth">
      <Image style={{marginRight: "5px"}} src={img} alt="auth image" />
      {text}
    </button>
    </div>
  );
};

export default ButtonAuth;

