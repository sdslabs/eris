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

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  let sendRequest = async (e) => {
    e.preventDefault();
    try {
      let res = await axios("http://10.25.1.18:9898/register", {
        method: "POST",
        body: JSON.stringify({
          flowID: FlowID,
          csrf_token: CsrfToken,
          password: pass,
          identifier: email,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setEmail("");
        setPass("");
        console.log();
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() =>{
    const createFLow= async ()=>{
     const response=await axios.get("http://10.25.1.18:9898/register",{withCredentials: true})
     setFlowID(response.flowID)
     setCsrfToken(response.csrf_token)
    }
    createFLow()
   }, []);

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
      <form onSubmit={sendRequest}>
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
