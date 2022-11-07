import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

export default function Password() {
    const [inputActive, setInputActive] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
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
          onFocus={() => setInputActive(!inputActive)}
          onBlur={() => setInputActive(!inputActive)}
          //ref={register({ required: "This is required." })}
        />
        <i onClick={togglePasswordVisiblity}>{eye}</i>{" "}
    </div>
  );
}
