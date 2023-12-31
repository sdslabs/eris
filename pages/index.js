import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { React, useState } from "react";
import { handleGetLoginFlow, handlePostLoginFlow } from "../api/loginFlow";
import ButtonAuth from "../components/button_auth";
import ButtonSubmit from "../components/button_submit";
import Carousel from "../components/carousel";
import Hr_or from "../components/hr_or";
import Input from "../components/input_box";
import Password from "../components/password";
import Labs from "../public/images/labs logo.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  async function handleSubmitLogin() {
    try {
      const { flowID, csrf_token } = await handleGetLoginFlow();
      await handlePostLoginFlow(flowID, csrf_token, email, password);
      setEmail("");
      setPassword("");
      await redirect();
    } catch (err) {
      console.error(err);
      if (err.code === "ERR_NETWORK") {
        setPasswordError("Couldn't connect to server");
      } else {
        setPasswordError("Invalid email or password");
      }
    }
  }

  const router = useRouter();

  async function redirect() {
    try {
      const { qr, totp_secret } = await handleGetSettingsFlow();

      if (qr === "" && totp_secret === "") {
        router.push("confidential");
      } else {
        router.push("dashboard");
      }
    } catch (error) {
      console.error(err);
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
              <Password
                text="Enter your password"
                handlePasswordChange={(e) => setPassword(e.target.value.trim())}
                passwordError={passwordError}
              />
            </div>
            <div className="tickBox">
              <input type="checkbox" className="checkbox" />
              <label className="remember">Remember me</label>
              <Link className=" underline green" href="/recover" style={{ float: "right" }}>
                Forgot password?
              </Link>
            </div>
            <ButtonSubmit text="Login" func={handleSubmitLogin} email={email} password={password} />

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
