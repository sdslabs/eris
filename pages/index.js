//require("dotenv").config({ path: __dirname + '/../.env' })
import ButtonAuth from "../components/button_auth";
import Labs from "../public/images/labs logo.png";
import axios from "axios";
import Image from "next/image";
import Carousel from "../components/carousel";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const eye = <FontAwesomeIcon icon={faEye} />;
const crossedEye = <FontAwesomeIcon icon={faEyeSlash} />;

const LoginPage = () => {
  const [inputActive1, setInputActive1] = useState(false);
  const [inputActive2, setInputActive2] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [eyeCrossed, setEyeCrossed] = useState(false);
  const [FlowID, setFlowID] = useState("");
  const [CsrfToken, setCsrfToken] = useState("");
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
      const getResponse = await axios.get("http://localhost:9898/login", {
        withCredentials: true,
      });
      setFlowID(getResponse.flowID);
      setCsrfToken(getResponse.csrf_token);
      let res = await axios("http://localhost:9898/login", {
        method: "POST",
        body: JSON.stringify({
          flowID: FlowID,
          csrf_token: CsrfToken,
          password: pass,
          identifier: email,
        }),
      });
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
            <h1>
              Log<span className="green">in</span>
            </h1>
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
                  ></input>
                </div>
                <p>Password</p>

                <div className={"inputBox" + " " + inputActive2}>
                  {" "}
                  <input
                    type={passwordShown ? "text" : "password"}
                    className="input"
                    placeholder="Enter your password"
                    value={pass}
                    onFocus={() => setInputActive2(!inputActive2)}
                    onBlur={() => setInputActive2(!inputActive2)}
                    onChange={(e) => setPass(e.target.value)}
                  ></input>
                  <i
                    className="passEye"
                    onClick={() => {
                      toggleEye();
                      togglePasswordVisiblity();
                    }}
                  >
                    {eyeCrossed ? eye : crossedEye}
                  </i>{" "}
                </div>
                {/* <p className="text-danger">{passwordError}</p> */}
              </div>
              <div className="tickBox">
                <input type="checkbox" className="checkbox" />
                <label className="remember">Remember me</label>
                <Link
                  className=" underline green"
                  href="/recover"
                  style={{ float: "right" }}
                >
                  Forgot password?
                </Link>
              </div>
              <div>
                <button type="submit" className="button_submit">
                  Login
                </button>
              </div>
            </form>
            <p>
              Dont have an account?{" "}
              <Link className="green underline" href="/signup">
                Sign up{" "}
              </Link>
            </p>
            <table className="or">
              <tbody>
                <tr>
                  <td>
                    <hr className="option_hr" />
                  </td>
                  <td>OR</td>
                  <td>
                    <hr className="option_hr" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="oauth">
            <ButtonAuth text={"Continue with Google"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
