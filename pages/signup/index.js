import React, { useState, useEffect } from 'react';
import axios from "axios";
import ButtonAuth from "../../components/button_auth";
import Icons from "../../components/icons";
import Labs from "../../public/images/labs logo.png";
import Image from "next/image";
import Carousel from "../../components/carousel";
import Link from "next/link";

const SignupPage = () => {
  const [inputActive1, setInputActive1] = useState(false);
  const [inputActive2, setInputActive2] = useState(false);
  const [inputActive3, setInputActive3] = useState(false);
  const [inputActive4, setInputActive4] = useState(false);
  const [FlowID, setFlowID] = useState("");
  const [CsrfToken, setCsrfToken] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  let signuppost = async (e) => {
    e.preventDefault();
    const response=await axios.get("http://localhost:9898/register",{withCredentials: true})
    setFlowID(response.flowID)
    setCsrfToken(response.csrf_token)
    console.log("cookie dekh")
  };

return (
<div>
  <div className="split_left">
    <div className="top">
      <Image src={Labs} alt="labs" />
    </div>
    <div className="centred_img">
      <Carousel />
    </div>
  </div>
  <div className="split_right ">
    <div className="signup">
      <div className="icons">
      <Icons />
      </div>
      <div>
        <h1>Sign <span className="green">up</span></h1>
      </div>
      <div className="form">
      <form onSubmit={signuppost}>
        <div>
          <p>Full name</p>
          <div className={"inputBox" + " " + inputActive1}>
          <input
            type="text"
            onFocus={() => setInputActive1(!inputActive1)}
            onBlur={() => setInputActive1(!inputActive1)}
            className="input"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          >
          </input>
          </div>
          <p>Email address</p>
          <div className={"inputBox" + " " + inputActive2}>
          <input
            type="text"
            onFocus={() => setInputActive2(!inputActive2)}
            onBlur={() => setInputActive2(!inputActive2)}
            className="input"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
          </input>
          </div>
          <p>Phone Number</p>
          <div className={"inputBox" + " " + inputActive3}>
          <input
            type="text"
            onFocus={() => setInputActive3(!inputActive3)}
            onBlur={() => setInputActive3(!inputActive3)}
            className="input"
            placeholder="Enter your Phone Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          >
          </input>
          </div>
        </div>
        <div>
        <button type="submit" className="button_submit">
          Create Account
        </button>
        </div>
        </form>
        <p>Already have an account? <Link className="green underline" href="/">Log in</Link> </p>
      </div>
      <table className="or"><tbody><tr><td><hr className="option_hr"/></td><td>OR</td><td><hr className="option_hr"/></td></tr></tbody></table>
      <div className="oauth">
        <ButtonAuth
        text={"Continue with Google"}
        />
      </div>
    </div>
  </div>
</div>
  );
};

export default SignupPage;
