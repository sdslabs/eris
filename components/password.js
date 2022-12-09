import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
const crossedEye = <FontAwesomeIcon icon={faEyeSlash} />;

const Password= ({ type, text}) => {
  const [inputActive, setInputActive] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [eyeCrossed, setEyeCrossed] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const toggleEye = () => {
    setEyeCrossed(eyeCrossed ? false : true);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className={"inputBox"+ " " + inputActive}>
        {" "}
        <input
          type={passwordShown ? "text" : "password"}
          className="input"
          placeholder={text}
          onFocus={() => setInputActive(!inputActive)}
          onBlur={() => setInputActive(!inputActive)}
        >
        </input>
        <i className="passEye" onClick={() => 
          { toggleEye(); togglePasswordVisiblity();}}>{eyeCrossed ? eye : crossedEye}</i>{" "}

          
          
    </div>
  );
}

export default Password