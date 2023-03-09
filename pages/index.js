import ButtonAuth from "../components/button_auth";
import Labs from "../public/images/labs logo.png";
import axios from "axios";
import Image from "next/image";
import Carousel from "../components/carousel";
import { React, useState } from "react";
import { useRouter } from "next/router";
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
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const toggleEye = () => {
    setEyeCrossed(eyeCrossed ? false : true);
  };

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  let sendRequest = async () => {
    try {
      const getResponse = await axios.get(process.env.NEXT_PUBLIC_LOGIN, {
        withCredentials: true,
      });
      const res = await axios.post(
        process.env.NEXT_PUBLIC_LOGIN,
        {
          flowID: getResponse.data.flowID,
          csrf_token: getResponse.data.csrf_token,
          password: pass,
          identifier: email,
        },
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        setEmail("");
        setPass("");
        console.log("logged in");
        return true
      } else {
        setMessage("Some error occured");
        return false
      }
    } catch (err) {
      console.log(err);
      return false
    }
  };

const router = useRouter();
const redirect = () =>{

  router.push('dashboard');
}

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
              <button
                type="submit"
                className="button_submit"
                onClick={async ()=>{
                  if(await sendRequest()){
                    console.log("redirect");
                     redirect();
                  }else{
                    console.log("error")
                  }
                }}
              >
                Login
              </button>
            </div>
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
