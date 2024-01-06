import { useRouter } from "next/router";
import { React, useState } from "react";
import { handleGetMFAFlow, handlePostMFAFlow } from "../../api/mfaFlow";
import ButtonSubmit from "../../components/button_submit";
import Password from "../../components/password";

function MFAPage() {
  const [totpCode, setTotpCode] = useState("");

  async function verifyTOTP() {
    try {
      const { flowID, csrf_token } = await handleGetMFAFlow();
      const res = await handlePostMFAFlow(flowID, csrf_token, totpCode);
      if (res === "MFA Successful") {
        router.push("dashboard");
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
    <div className="settings">
      <label htmlFor="code"><p>Enter TOTP Code</p></label>
      <Password text="Enter TOTP Code here" handlePasswordChange={(e) => setTotpCode(e.target.value.trim())} name="code" />
      <ButtonSubmit text="Authenticate" password={totpCode} func={verifyTOTP} />
    </div>
  );
}

export default MFAPage;
