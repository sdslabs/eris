import ButtonSubmit from "./button_submit";
import PasswordValidation from "./passwordValidation";
import React, { useState, useEffect } from "react";
import axios from "axios";
const SetPassword = ({ name, number, email, setEmail, setName, setNumber }) => {
  const [passwordInput, setPasswordInput] = useState({
    password: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordErr] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const func = async (event) => {
    event.preventDefault();
    const getResponse = await axios.get("http://localhost:9898/register", {
      withCredentials: true,
    });
    console.log(getResponse.data.flowID);
    try {
      let res = await axios.post(
        "http://localhost:9898/register",
        {
            flowID: getResponse.data.flowID,
            csrf_token: getResponse.data.csrf_token,
            password: passwordInput.password,
            traits: {
              email: email,
              name: name,
              phone_number: number,
            },
        },
        {
          withCredentials: true,
        }
      );
      if (res.status == 200) {
        setPasswordInput({
          password: "",
          confirmPassword: "",
        });
        setEmail("");
        setName("");
        setNumber("");
        console.log("registered");
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="slide-in">
      <div>
        <h1>
          Set <span className="green">Password</span>
        </h1>
      </div>
      <div className="form">
        <PasswordValidation
          passwordInput={passwordInput}
          setPasswordInput={setPasswordInput}
          setConfirmPasswordError = {setConfirmPasswordError}
          confirmPasswordError = {confirmPasswordError}
          passwordError = {passwordError}
          setPasswordErr = {setPasswordErr}
        />
      </div>
      <div>
        <ButtonSubmit
          text={"Confirm"} func={func} err1 = {confirmPasswordError} err2 = {passwordError} password={passwordInput.password} confirmPassword = {passwordInput.confirmPassword}/>
      </div>
    </div>
  );
};

export default SetPassword;
