import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useState } from "react";
import Password from "./password";
import { Tooltip } from "react-tooltip";
const info = <FontAwesomeIcon icon={faInfoCircle} />;

function PasswordValidation({ password, confirmPassword, dispatchPass }) {
  const [greenBox, setGreenBox] = useState("");
  const [confirmGreenBox, setConfirmGreenBox] = useState("");

  function handlePasswordChange(event) {
    const passwordInputValue = event.target.value.trim();
    const passwordInputFieldName = event.target.name;

    if (passwordInputFieldName === "password") {
      dispatchPass({ type: "setPassword", payload: passwordInputValue });
    } else {
      dispatchPass({ type: "setConfirmPassword", payload: passwordInputValue });
    }
  }

  function handleValidation(event) {
    const passwordInputValue = event.target.value.trim();
    const passwordInputFieldName = event.target.name;

    //for password
    if (passwordInputFieldName === "password") {
      const uppercaseRegExp = /(?=.*?[A-Z])/;
      const lowercaseRegExp = /(?=.*?[a-z])/;
      const digitsRegExp = /(?=.*?[0-9])/;
      const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
      const minLengthRegExp = /.{8,}/;

      const passwordLength = passwordInputValue.length;
      const uppercasePassword = uppercaseRegExp.test(passwordInputValue);
      const lowercasePassword = lowercaseRegExp.test(passwordInputValue);
      const digitsPassword = digitsRegExp.test(passwordInputValue);
      const specialCharPassword = specialCharRegExp.test(passwordInputValue);
      const minLengthPassword = minLengthRegExp.test(passwordInputValue);

      let errMsg = "";
      let errcolor = "";
      if (passwordLength === 0) {
        errMsg = "";
        errcolor = "";
      } else if (
        !uppercasePassword ||
        !lowercasePassword ||
        !digitsPassword ||
        !specialCharPassword ||
        !minLengthPassword
      ) {
        errMsg = "Password does not match the specified criteria.";
        errcolor = "red-box";
      } else {
        errMsg = "";
        errcolor = "green-box";
      }
      dispatchPass({ type: "setPasswordErr", payload: errMsg });
      setGreenBox(errcolor);
    }

    // for confirm password
    if (
      passwordInputFieldName === "confirmPassword" ||
      (passwordInputFieldName === "password" && confirmPassword.text.length > 0)
    ) {
      let errMsg = "";
      let errcolor = "";
      if (confirmPassword.text.length === 0) {
        errMsg = "";
        errcolor = "";
      } else if (password.text !== confirmPassword.text) {
        errMsg = "Password and confirmation password do not match.";
        errcolor = "red-box";
      } else {
        errMsg = "";
        errcolor = "green-box";
      }
      dispatchPass({ type: "setConfirmPasswordErr", payload: errMsg });
      setConfirmGreenBox(errcolor);
    }
  }

  return (
    <div className="row">
      <div className="col-sm-4">
        <p>
          Password <i data-tooltip-id="criteria">{info}</i>
          <Tooltip id="criteria">
            <PasswordRules />
          </Tooltip>
        </p>

        <div className={greenBox}>
          <Password
            name="password"
            value={password.text}
            text={"Your password must contain 8 characters"}
            handlePasswordChange={handlePasswordChange}
            handleValidation={handleValidation}
          />
        </div>
        <p>Confirm Password</p>
        <div className={confirmGreenBox}>
          <Password
            name="confirmPassword"
            value={confirmPassword.text}
            text={"Re-enter your password"}
            handlePasswordChange={handlePasswordChange}
            handleValidation={handleValidation}
          />
        </div>
      </div>
    </div>
  );
}

function PasswordRules() {
  return (
    <div>
      Your password needs to have:
      <ul>
        <li>Minimum 8 characters</li>
        <li>Atleast 1 uppercase character</li>
        <li>Atleast 1 lowercase character</li>
        <li>Atleast 1 special character</li>
        <li>Atleast 1 digit</li>
      </ul>
    </div>
  );
}

export default PasswordValidation;
