import { React, useReducer } from "react";
import { handleGetRegisterFlow, handlePostRegisterFlow } from "../api/registerFlow";
import ButtonSubmit from "./button_submit";
import IconsPass from "./icons_pass";
import PasswordValidation from "./passwordValidation";

const initialState = {
  password: { text: "", error: "" },
  confirmPassword: { text: "", error: "" },
  registrationError: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "setRegistrationError":
      return { ...state, registrationError: action.payload };
    case "setPassword":
      return { ...state, password: { text: action.payload, error: "" } };
    case "setConfirmPassword":
      return { ...state, confirmPassword: { text: action.payload, error: "" } };
    case "setPasswordErr":
      return { ...state, password: { text: state.password.text, error: action.payload } };
    case "setConfirmPasswordErr":
      return { ...state, confirmPassword: { text: state.confirmPassword.text, error: action.payload } };
    case "reset":
      return initialState;
  }
}

function SetPassword({ name, number, email, dispatchSign }) {
  const [{ password, confirmPassword, registrationError }, dispatchPass] = useReducer(reducer, initialState);

  async function handleCreateAccount() {
    try {
      const { flowID, csrf_token } = await handleGetRegisterFlow();
      await handlePostRegisterFlow(flowID, csrf_token, password.text, email, name, number);
      dispatchPass({ type: "reset" });
      dispatchSign({ type: "reset" });
      console.log("registered");
    } catch (err) {
      if (err.code === "ERR_NETWORK") {
        dispatchPass({
          type: "setRegistrationError",
          payload: "Couldn't connect to server",
        });
      } else {
        console.error(err);
        dispatchPass({
          type: "setRegistrationError",
          payload: "Password too weak. Try again with a stronger password.",
        });
      }
    }
  }

  return (
    <div>
      <IconsPass />
      <div className="slide-out">
        <div>
          <h1>
            Set <span className="green">Password</span>
          </h1>
        </div>
        <div className="form">
          <PasswordValidation password={password} confirmPassword={confirmPassword} dispatchPass={dispatchPass} />
        </div>
        <p className="text-danger">{registrationError}</p>
        <div>
          <ButtonSubmit
            text={"Confirm"}
            func={handleCreateAccount}
            err1={confirmPassword.error}
            err2={password.error}
            password={password.text}
            confirmPassword={confirmPassword.text}
          />
        </div>
      </div>
    </div>
  );
}

export default SetPassword;
