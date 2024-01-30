import { React, useReducer } from "react";
import LeftCarousel from "../../components/LeftCarousel";
import Icons from "../../components/icons";
import Signup from "../../components/register";
import SetPassword from "../../components/setpass";
import Verify from "../../components/verifyEmail";

const initialState = {
  email: "",
  name: "",
  number: "",
  status: "signupForm", //signupForm, passForm, verificationForm
};

function reducer(state, action) {
  switch (action.type) {
    case "setEmail":
      return { ...state, email: action.payload };
    case "setName":
      return { ...state, name: action.payload };
    case "setNumber":
      return { ...state, number: action.payload };
    case "setStatus":
      return { ...state, status: action.payload };
    case "reset":
      return { ...state, status: "verificationForm" };
  }
}

function SignupPage() {
  const [{ email, name, number, status }, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <LeftCarousel />
      <div className="split_right ">
        <div className="signup">
          {status === "signupForm" ? <Signup dispatch={dispatch} name={name} email={email} number={number} /> : null}
          {status === "passForm" ? (
            <SetPassword dispatchSign={dispatch} name={name} email={email} number={number} />
          ) : null}

          {status === "verificationForm" ? (
            <>
              <Icons step="verify" />
              <Verify email={email} />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
