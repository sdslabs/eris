import ButtonSubmit from "./button_submit";
import PasswordValidation from "./passwordValidation";
import { React, useState } from "react";
import axios from "axios";

const SetPassword = ({ handleClick, name, number, email, setEmail, setName, setNumber }) => {
  const [passwordInput, setPasswordInput] = useState({
    password: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordErr] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [registrationError, setRegistrationError] = useState("");

  const func = async (event) => {
    event.preventDefault();
    const getResponse = await axios.get(process.env.NEXT_PUBLIC_SIGNUP, {
      withCredentials: true,
    });
    try {
      let res = await axios.post(
        process.env.NEXT_PUBLIC_SIGNUP,
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
        handleClick();
      } else {
        console.log("error");
        setRegistrationError("Registration failed. Try again.");
      }
    } catch (err) {
      console.log(err);
      setRegistrationError("Password too weak. Try again with a stronger password.");
    }
  };

  return (
    <div className="slide-out">
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
      <p className="text-danger">{registrationError}</p>
      <div>
        <ButtonSubmit
          text={"Confirm"} func={func} err1 = {confirmPasswordError} err2 = {passwordError} password={passwordInput.password} confirmPassword = {passwordInput.confirmPassword}/>
      </div>
    </div>
  );
};

export default SetPassword;
