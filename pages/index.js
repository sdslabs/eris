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
      const res = await handlePostLoginFlow(flowID, csrf_token, email, password);
      const traits = res.person.identity.traits;
      setEmail("");
      setPassword("");
      redirect(traits);
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

  function redirect(traits) {
    if (traits) {
      router.push({ pathname: "/dashboard", query: { role: traits.role } }, "dashboard");
    } else {
      router.push("confidential");
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
              <Input
                type="text"
                text="Enter your email address"
                value={email}
                handleChange={(e) => setEmail(e.target.value)}
              />

              <p>Password</p>
              <Password
                text="Enter your password"
                value={password}
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
