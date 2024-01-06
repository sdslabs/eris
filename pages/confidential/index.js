import { useRouter } from "next/router";
import { React, useState } from "react";
import { handleGetMFAFlow, handlePostMFAFlow } from "../../api/mfaFlow";
import ButtonSubmit from "../../components/button_submit";
import Password from "../../components/password";

function MFAPage() {
  const [totpCode, setTotpCode] = useState("");

  function handleTOTPChange(e) {
    setTotpCode(e.target.value.trim());
  }

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
    <div>
      <label htmlFor="code">Enter TOTP Code</label>
      <Password text="Enter TOTP Code here" onChange={handleTOTPChange} name="code" />
      <ButtonSubmit text="Authenticate" password={totpCode} func={verifyTOTP} />
    </div>
  );
}

export default MFAPage;
