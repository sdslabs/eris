import React from "react";
import Google from "../public/images/google.svg";
import Image from "next/image";

const ButtonAuth = ({ text }) => {

  return (
    <div>
    <button className="button_auth">
    <Image src={Google} alt="google icon" />
      {text}
    </button>
    </div>
  );
};

export default ButtonAuth;

