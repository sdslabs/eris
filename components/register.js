import React, { useState, useEffect } from 'react';
import ButtonAuth from "./button_auth";
import Icons from "./icons";

import Link from "next/link";

const Signup = ({ handleClick }) => {
  const [inputActive1, setInputActive1] = useState(false);
  const [inputActive2, setInputActive2] = useState(false);
  const [inputActive3, setInputActive3] = useState(false);
  const [FlowID, setFlowID] = useState("");
  const [CsrfToken, setCsrfToken] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

const signup=()=>{
    console.log("urmom")
}
return (
<div className='slide-out'>

      <div>
        <h1>Sign <span className="green">up</span></h1>
      </div>
      <div className="form">
      <form onSubmit={signup}>
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
        <button type="submit" className="button_submit" onClick={handleClick}>
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
  );
};

export default Signup;
