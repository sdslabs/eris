import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
const crossedEye = <FontAwesomeIcon icon={faEyeSlash} />;

const Password= ({ text, handleValidation, handlePasswordChange, confirmPasswordValue, confirmPasswordError }) => {
  const [inputActive, setInputActive] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [eyeCrossed, setEyeCrossed] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const toggleEye = () => {
    setEyeCrossed(eyeCrossed ? false : true);
  };

  return (
    <div>
    <div className={"inputBox"+ " " + inputActive}>
        {" "}
        <input
          type={passwordShown ? "text" : "password"}
          value={confirmPasswordValue}
          onChange={handlePasswordChange}
          onKeyUp={handleValidation}
          className="input"
          placeholder={text}
          name="confirmPassword"
          onFocus={() => setInputActive(!inputActive)}
          onBlur={() => setInputActive(!inputActive)}
        >
        </input>
        <i className="passEye" onClick={() =>
          { toggleEye(); togglePasswordVisiblity();}}>
            {eyeCrossed ? eye : crossedEye}</i>{" "}
    </div>
    <p className="text-danger">{confirmPasswordError}</p>
    </div>
  );
}

export default Password
