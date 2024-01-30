import { useRouter } from "next/router";
import { useEffect } from "react";
import { handleGetVerifyFlow, handlePostVerifyFlow } from "../api/verificationFlow";
import ButtonSubmit from "./button_submit";

function VerifyEmail({ email }) {
  const router = useRouter();
  function redirect() {
    router.push("dashboard");
  }

  useEffect(() => {
    sendEmail(email);
  }, [email]);

  async function sendEmail(email) {
    try {
      const { flowID, csrf_token } = await handleGetVerifyFlow();
      const res = await handlePostVerifyFlow(flowID, csrf_token, email);

      if (res === "Account Verification Mail Sent") {
        alert(res);
      } else {
        alert("Some error occured");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="slide-in">
      <div>
        <h1>
          Email <span className="green">Verification</span>
        </h1>
      </div>
      <div className="form">
        <div>
          <p>
            An email has been sent to <span className="green">{email}</span>
          </p>
        </div>
        <div>
          <ButtonSubmit text={"Continue to Dashboard"} func={redirect} />
        </div>
        <p>
          Didnt get the email?{" "}
          <span className="green underline" onClick={() => sendEmail(email)}>
            Resend Email
          </span>
        </p>
      </div>
    </div>
  );
}

export default VerifyEmail;
