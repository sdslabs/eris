import { React } from "react";
import ButtonAuth from "./button_auth";
import Link from "next/link";
import Hr_or from "./hr_or";
import Input from "./input_box";
import Icons from "./icons";

function Signup({ name, email, number, dispatch }) {
  return (
    <div>
      <Icons />
      <div className="slide-out">
        <div>
          <h1>
            Sign <span className="green">up</span>
          </h1>
        </div>
        <div className="form">
          <div>
            <p>Full name</p>
            <Input
              type="text"
              text="Enter your full name"
              handleChange={(e) => dispatch({ type: "setName", payload: e.target.value })}
            />

            <p>Email address</p>
            <Input
              type="text"
              text="Enter your email address"
              handleChange={(e) => dispatch({ type: "setEmail", payload: e.target.value })}
            />

            <p>Phone Number</p>
            <Input
              type="number"
              text="Enter your Phone Number"
              handleChange={(e) => dispatch({ type: "setNumber", payload: e.target.value })}
            />
          </div>
          <div>
            <button
              type="submit"
              className="button_submit"
              onClick={() => dispatch({ type: "setStatus", payload: "passForm" })}
              disabled={!name || !number || !email}
            >
              Create Account
            </button>
          </div>
          <p>
            Already have an account?{" "}
            <Link className="green underline" href="/">
              Log in
            </Link>
          </p>
        </div>
        <Hr_or />
        <div className="oauth">
          <ButtonAuth text={"Continue with Google"} />
        </div>
      </div>
    </div>
  );
}

export default Signup;
