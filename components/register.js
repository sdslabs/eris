import { React } from "react";
import ButtonAuth from "./button_auth";
import Link from "next/link";
import Hr_or from "./hr_or";
import Input from "./input_box";

const Signup = ({ handleClick, name, email, number, setEmail, setName, setNumber }) => {
  return (
    <div className="slide-out">
      <div>
        <h1>
          Sign <span className="green">up</span>
        </h1>
      </div>
      <div className="form">
        <div>
          <p>Full name</p>
          <Input type="text" text="Enter your full name" handleChange={(e) => setName(e.target.value)} />

          <p>Email address</p>
          <Input type="text" text="Enter your email address" handleChange={(e) => setEmail(e.target.value)} />

          <p>Phone Number</p>
          <Input type="number" text="Enter your Phone Number" handleChange={(e) => setNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit" className="button_submit" onClick={handleClick} disabled={!name || !number || !email}>
            Create Account
          </button>
        </div>
        <p>
          Already have an account?{" "}
          <Link className="green underline" href="/">
            Log in
          </Link>{" "}
        </p>
      </div>
      <Hr_or />
      <div className="oauth">
        <ButtonAuth text={"Continue with Google"} />
      </div>
    </div>
  );
};

export default Signup;
