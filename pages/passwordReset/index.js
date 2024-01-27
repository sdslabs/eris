import Image from "next/image";
import { useReducer } from "react";
import { handleGetSettingsFlow, handlePostChangePasswordFlow } from "../../api/settingsFlow";
import ButtonSubmit from "../../components/button_submit";
import Carousel from "../../components/carousel";
import PasswordValidation from "../../components/passwordValidation";
import Labs from "../../public/images/labs logo.png";
import { useRouter } from "next/router";

const initialState = {
  password: { text: "", error: "" },
  confirmPassword: { text: "", error: "" },
};

function reducer(state, action) {
  switch (action.type) {
    case "setPassword":
      return { ...state, password: { text: action.payload, error: "" } };
    case "setConfirmPassword":
      return { ...state, confirmPassword: { text: action.payload, error: "" } };
    case "setPasswordErr":
      return { ...state, password: { text: state.password.text, error: action.payload } };
    case "setConfirmPasswordErr":
      return { ...state, confirmPassword: { text: state.confirmPassword.text, error: action.payload } };
    case "reset":
      return initialState;
  }
}

function PasswordReset() {
  const [{ password, confirmPassword }, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();

  async function handleRecovery() {
    try {
      const { flowID, csrf_token } = await handleGetSettingsFlow();
      await handlePostChangePasswordFlow(flowID, csrf_token, password.text);
      dispatch({ type: "reset" });
      alert("Password changed successfully");
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
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
              Password <span className="green">Reset</span>
            </h1>
          </div>
          <div className="form">
            <PasswordValidation password={password} confirmPassword={confirmPassword} dispatchPass={dispatch} />
          </div>
          <div>
            <ButtonSubmit
              text={"Confirm"}
              func={handleRecovery}
              err1={confirmPassword.error}
              err2={password.error}
              password={password.text}
              confirmPassword={confirmPassword.text}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordReset;
