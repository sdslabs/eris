import Image from "next/image";
import { React, useReducer } from "react";
import Carousel from "../../components/carousel";
import Signup from "../../components/register";
import SetPassword from "../../components/setpass";
import Verify from "../../components/verifyEmail";
import Labs from "../../public/images/labs logo.png";

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

function LeftSide() {
  return (
    <div className="split_left">
      <div className="top">
        <Image src={Labs} alt="labs" />
      </div>
      <div className="centred_img">
        <Carousel />
      </div>
    </div>
  );
}

function SignupPage() {
  const [{ email, name, number, status }, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <LeftSide />
      <div className="split_right ">
        <div className="signup">
          {status === "signupForm" ? <Signup dispatch={dispatch} name={name} email={email} number={number} /> : null}
          {status === "passForm" ? (
            <SetPassword dispatchSign={dispatch} name={name} email={email} number={number} />
          ) : null}
          {status === "verificationForm" ? <Verify email={email} /> : null}
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
