import Button2 from "../components/button2";
import Labs from "../public/images/labs logo.png";
import Image from "next/image";
import Carousel from "../components/carousel";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
const crossedEye = <FontAwesomeIcon icon={faEyeSlash} />;

var FlowID, CsrfToken

const LoginPage = () => {
  const [inputActive1, setInputActive1] = useState(false);
  const [inputActive2, setInputActive2] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [eyeCrossed, setEyeCrossed] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const toggleEye = () => {
    setEyeCrossed(eyeCrossed ? false : true);
  };


  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  let sendRequest = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://0.0.0.0:9999/login", {
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
  const response=await fetch('http://0.0.0.0:9999/login')
  const result = await response.json()
  FlowID=(result.flowID)
  CsrfToken=(result.csrf_token)
  console.log(response.headers);
 }
 createFLow()
}, []);

return (

<div className="loginpage">
  <div className="split_left">
    <div className="top">
      <Image src={Labs} alt="labs" />
    </div>
    <div className="centred_img">
      <Carousel />
    </div>
  </div>
  <div className="split_right ">
    <div className="login">
      <div>
        <h1>Log<span className="green">in</span></h1>
      </div>
      <div className="form">
      <form onSubmit={sendRequest}>
        <div>
        <p>Email address</p>
        <div className={"inputBox" + " " + inputActive1}>
        <input
          type="text"
          onFocus={() => setInputActive1(!inputActive1)}
          onBlur={() => setInputActive1(!inputActive1)}
          className="input"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        >
    </input>
    </div>
        <p>Password</p>

        <div className={"inputBox"+ " " + inputActive2}>
        {" "}
        <input
          type={passwordShown ? "text" : "password"}
          className="input"
          placeholder="Enter your password"
          value={pass}
          onFocus={() => setInputActive2(!inputActive2)}
          onBlur={() => setInputActive2(!inputActive2)}
          onChange={(e) => setPass(e.target.value)}
        >
        </input>
        <i className="passEye" onClick={() =>
          { toggleEye(); togglePasswordVisiblity();}}>
            {eyeCrossed ? eye : crossedEye}</i>{" "}
    </div>
    {/* <p className="text-danger">{passwordError}</p> */}


        </div>
        <div className="tickBox">
          <input
            type="checkbox"
            className="checkbox"
          />
          <label className="remember">Remember me</label>
          <a className=" underline green" href="/recover" style={{float: "right"}}>
            Forgot password?
          </a>
        </div>
        <div>
        <button type="submit" className="button1">
          Login
        </button>
        </div>
        </form>
          <p>
            Don't have an account? <a className="green underline" href="/signup">
            Sign up </a>
          </p>
          <table className="or">
            <tbody>
              <tr>
                <td><hr className="option_hr"/></td>
                <td>OR</td>
                <td><hr className="option_hr" /></td>
              </tr>
            </tbody>
          </table>
      </div>
      <div className="oauth">
        <Button2
          text={"Continue with Google"}
        />
      </div>
    </div>
  </div>
</div>
  );
};

export default LoginPage;
