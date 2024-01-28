import { useRouter } from "next/router";
import { React, useState } from "react";
import { handleGetMFAFlow, handlePostMFAFlow } from "../../api/mfaFlow";
import LeftCarousel from "../../components/LeftCarousel";
import ButtonSubmit from "../../components/button_submit";
import Password from "../../components/password";

function MFAPage() {
  const [totpCode, setTotpCode] = useState("");

  async function verifyTOTP() {
    try {
      const { flowID, csrf_token } = await handleGetMFAFlow();
      const res = await handlePostMFAFlow(flowID, csrf_token, totpCode);

      if (res.status === "MFA Successful") {
        if (router.query.nextPage === "changePassword") {
          router.push("passwordReset");
        } else {
          router.push("dashboard");
        }
      } else {
        alert("ERROR:MFA Failed");
      }
    } catch (error) {
      console.error(error);
      alert("ERROR:MFA Failed");
    }
  }
  const router = useRouter();

  return (
    <div>
      <LeftCarousel />
      <div className="split_right">
        <div className="login">
          <div>
            <h1>
              Multi-Factor <span className="green">Authentication</span>
            </h1>
          </div>
          <div className="form">
            <Password
              text="Enter TOTP Code here"
              handlePasswordChange={(e) => setTotpCode(e.target.value.trim())}
              name="code"
              value={totpCode}
            />
          </div>
          <div>
            <ButtonSubmit text="Authenticate" password={totpCode} func={verifyTOTP} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MFAPage;
