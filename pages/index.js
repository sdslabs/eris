import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { React, useState } from "react";
import ButtonAuth from "../components/button_auth";
import ButtonSubmit from "../components/button_submit";
import Carousel from "../components/carousel";
import Hr_or from "../components/hr_or";
import Input from "../components/input_box";
import Labs from "../public/images/labs logo.png";
const eye = <FontAwesomeIcon icon={faEye} />;
const crossedEye = <FontAwesomeIcon icon={faEyeSlash} />;

const axiosInstance = axios.create({ withCredentials: true });

const LoginPage = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  async function sendRequest() {
    try {
      const getResponse = await axiosInstance.get(process.env.NEXT_PUBLIC_LOGIN);
      const objData = {
        flowID: getResponse.data.flowID,
        csrf_token: getResponse.data.csrf_token,
        identifier: email,
        password,
      };
      const res = await axiosInstance.post(process.env.NEXT_PUBLIC_LOGIN, objData);
      if (res.status === 200) {
        setEmail("");
        setPassword("");
        console.log("logged in");
        return true;
      } else {
        setPasswordError("Some error occured");
        return false;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  const router = useRouter();

  function redirect() {
    axiosInstance
      .get(process.env.NEXT_PUBLIC_SETTINGS)
      .then((response) => {
        if (response.data.qr == "" && response.data.totp_secret == "" && response.data.csrf_token != "") {
          router.push("confidential");
        } else {
          router.push("dashboard");
        }
      })
      .catch((err) => console.log(err));
  }

  async function handleSubmitLogin() {
    if (await sendRequest()) {
      console.log("redirect");
      redirect();
    } else {
      console.log("error");
      setPasswordError("Invalid email or password");
    }
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
              <Input type="text" text="Enter your email address" handleChange={(e) => setEmail(e.target.value)} />

              <p>Password</p>
              <Input
                type={passwordShown ? "text" : "password"}
                text="Enter your password"
                handleChange={(e) => setPassword(e.target.value)}
              >
                <i className="passEye" onClick={() => setPasswordShown(!passwordShown)}>
                  {passwordShown ? eye : crossedEye}
                </i>
              </Input>

              <p className="text-danger">{passwordError}</p>
            </div>
            <div className="tickBox">
              <input type="checkbox" className="checkbox" />
              <label className="remember">Remember me</label>
              <Link className=" underline green" href="/recover" style={{ float: "right" }}>
                Forgot password?
              </Link>
            </div>
            <ButtonSubmit text="Login" func={handleSubmitLogin} />

            <p>
              Dont have an account?{" "}
              <Link className="green underline" href="/signup">
                Sign up{" "}
              </Link>
            </p>
            <Hr_or />
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
