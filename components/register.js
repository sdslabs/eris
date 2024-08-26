import { React, useState } from "react";
import ButtonAuth from "./button_auth";
import Link from "next/link";
import Hr_or from "./hr_or";
import Input from "./input_box";
import Icons from "./icons";

function Signup({ name, email, number, dispatch }) {

  const [greenBox, setGreenBox] = useState("");

  function handleRegistrationSubmit() {
    dispatch({ type: "setStatus", payload: "passForm" });
  }

  function handleRegistrationChange(event) {
    const nameInputValue = event.target.value.trim();
    const nameInputFieldName = event.target.name;

    if (nameInputFieldName === "number") {
      const numberLength = nameInputValue.length;
      console.log(numberLength);
      if (numberLength == 10 || numberLength == 0) {
        setGreenBox("");
      }else {
        setGreenBox("red-box");
      }
      dispatch({ type: "setNumber", payload: nameInputValue });
    }
  }

  return (
    <div>
      <Icons step={"account"} />
      <div className="slide-out">

          <h1>
            Sign <span className="green">up</span>
          </h1>

        <div className="form">
          <div>
            <p>Full name</p>
            <Input
              name="name"
              type="text"
              text="Enter your full name"
              value={name}
              handleChange={(e) => dispatch({ type: "setName", payload: e.target.value })}
            />

            <p>Email address</p>
            <Input
              name="email"
              type="text"
              value={email}
              text="Enter your email address"
              handleChange={(e) => dispatch({ type: "setEmail", payload: e.target.value.trim() })}
            />

            <p>Phone Number</p>
              <div className={greenBox}>
                <Input
                  name="number"
                  type="number"
                  value={number}
                  text="Enter your Phone Number"
                  handleChange={handleRegistrationChange}
                />
              </div>
          </div>
          <div>
            <button
              type="submit"
              className="button_submit"
              onClick={handleRegistrationSubmit}
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
      </div>
    </div>
  );
}

export default Signup;
