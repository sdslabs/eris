import ButtonSubmit from "./button_submit";
import PasswordValidation from "./passwordValidation";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
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
    const getResponse = await axios.get(process.env.NEXT_PUBLIC_SIGNUP, {
      withCredentials: true,
    });
    console.log(getResponse.data.flowID);
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
        redirect()
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

const router = useRouter();
const redirect = () =>{
  router.push('dashboard');
}

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
