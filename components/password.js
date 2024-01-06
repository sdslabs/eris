import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Input from "./input_box";
const eye = <FontAwesomeIcon icon={faEye} />;
const crossedEye = <FontAwesomeIcon icon={faEyeSlash} />;

function Password({ text, handlePasswordChange, passwordError, name, handleValidation }) {
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <div>
      <Input
        type={passwordShown ? "text" : "password"}
        text={text}
        handleChange={handlePasswordChange}
        name={name}
        handleKeyUp={handleValidation}
      >
        <i className="passEye" onClick={() => setPasswordShown(!passwordShown)}>
          {passwordShown ? eye : crossedEye}
        </i>
      </Input>
      <p className="text-danger">{passwordError}</p>
    </div>
  );
}

export default Password;
