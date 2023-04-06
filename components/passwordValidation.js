import { React, useState } from "react";
import Password from "./password";
import ConfirmPassword from "./confirmPassword";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
const info = <FontAwesomeIcon icon={faInfoCircle} />;

function PasswordValidation({passwordInput,setPasswordInput,confirmPasswordError,setConfirmPasswordError,passwordError, setPasswordErr}){

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    const [greenBox, setGreenBox] = useState("");
const [confirmGreenBox, setConfirmGreenBox] = useState("");
const handlePasswordChange =(evnt)=>{
    const passwordInputValue = evnt.target.value.trim();
    const passwordInputFieldName = evnt.target.name;
    const NewPasswordInput = {...passwordInput,[passwordInputFieldName]:passwordInputValue}
    setPasswordInput(NewPasswordInput);
}
const handleValidation= (evnt)=>{
    const passwordInputValue = evnt.target.value.trim();
    const passwordInputFieldName = evnt.target.name;

        //for password
if(passwordInputFieldName==='password'){
    const uppercaseRegExp   = /(?=.*?[A-Z])/;
    const lowercaseRegExp   = /(?=.*?[a-z])/;
    const digitsRegExp      = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    const minLengthRegExp   = /.{8,}/;

    const passwordLength =      passwordInputValue.length;
    const uppercasePassword =   uppercaseRegExp.test(passwordInputValue);
    const lowercasePassword =   lowercaseRegExp.test(passwordInputValue);
    const digitsPassword =      digitsRegExp.test(passwordInputValue);
    const specialCharPassword = specialCharRegExp.test(passwordInputValue);
    const minLengthPassword =   minLengthRegExp.test(passwordInputValue);

    let errMsg ="";
    let errcolor ="";
    if(passwordLength===0){
            errMsg="";
            errcolor="";
    }else if(!uppercasePassword || !lowercasePassword || !digitsPassword || !specialCharPassword || !minLengthPassword){
            errMsg="";
            errcolor="red-box";
    }else{
        errMsg="";
        errcolor="green-box";
    }
    setPasswordErr(errMsg);
    setGreenBox(errcolor)
    }

    // for confirm password
    if (passwordInputFieldName=== "confirmPassword" ||
        (passwordInputFieldName==="password" && passwordInput.confirmPassword.length > 0)){
        if (passwordInput.confirmPassword.length===0){
                setConfirmPasswordError ("");
                setConfirmGreenBox("")
        }
        else if (passwordInput.confirmPassword!==passwordInput.password)
        {
                setConfirmPasswordError ("");
                setConfirmGreenBox("red-box")
        } else {
                setConfirmPasswordError ("");
                setConfirmGreenBox("green-box")
        }
    }

}
    return(
    <div className="row">
     <div className="col-sm-4">
        <p>
            Password <i
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut} >
                {info}
            </i>
        </p>
        {isHovering && (
        <div className="pass-rules">
            Your password needs to have:
        <ul>
          <li>Minimum 8 characters</li>
          <li>Atleast 1 uppercase character</li>
          <li>Atleast 1 lowercase character</li>
          <li>Atleast 1 special character</li>
          <li>Atleast 1 digit</li>
        </ul>
        </div>
        )}
        <div className={greenBox}>
        <Password
        text={"Your password must contain 8 characters"}
        handlePasswordChange={handlePasswordChange}
        handleValidation={handleValidation}
        passwordValue={passwordInput.password}
        passwordError={passwordError}/>
        </div>
        <p>Confirm Password</p>
        <div className={confirmGreenBox}>
        <ConfirmPassword
        text={"Re-enter your password"}
        handlePasswordChange={handlePasswordChange}
        handleValidation={handleValidation}
        confirmPasswordValue={passwordInput.confirmPassword}
        confirmPasswordError={confirmPasswordError}/>
     </div>
     </div>
    </div>
    )
}

export default PasswordValidation;
