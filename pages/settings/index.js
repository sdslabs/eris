import { Button } from "@mui/material";
import Image from "next/image";
import { React, useEffect, useState } from "react";
import { handleGetSettingsFlow, handlePostChangePasswordFlow, handlePostToggleTOTPFlow } from "../../api/settingsFlow";

function ChangePassword({ flowID, csrf_token }) {
  const [newPassword, setNewPassword] = useState("");

  async function handleChangePassword() {
    try {
      await handlePostChangePasswordFlow(flowID, csrf_token, newPassword);
      alert("Password changed successfully");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <label htmlFor="newPassword">Enter New Password</label>
      <input
        type="text"
        name="newPassword"
        id="newPassword"
        onChange={(e) => {
          setNewPassword(e.target.value);
        }}
      />
      <Button onClick={handleChangePassword}>Change</Button>
    </div>
  );
}

const SettingsPage = () => {
  const [qrLink, setQrLink] = useState("");
  const [totpSecret, setTotpSecret] = useState("");
  const [flowID, setFlowID] = useState("");
  const [csrf_token, setCsrfToken] = useState("");
  const [totp_code, setTotpCode] = useState("");
  const [totpEnabled, setTotpEnabled] = useState(false);

  useEffect(() => {
    fetchNewQR();
  }, [totpEnabled]);

  async function linkTOTP() {
    try {
      await handlePostToggleTOTPFlow(flowID, csrf_token, totp_code, false);
      alert("Totp successful");
      setTotpEnabled(true);
    } catch (error) {
      console.error(error);
    }
  }

  async function unlinkTOTP() {
    try {
      await handlePostToggleTOTPFlow(flowID, csrf_token, totp_code, true);
      alert("Totp unlinked successfuly");
      setTotpEnabled(false);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchNewQR() {
    try {
      const { qr, totp_secret, flowID, csrf_token } = await handleGetSettingsFlow();

      setCsrfToken(csrf_token);
      setFlowID(flowID);

      if (qr === "" && totp_secret === "") {
        setTotpEnabled(true);
      } else {
        setTotpEnabled(false);
        setQrLink(qr);
        setTotpSecret(totp_secret);
      }
    } catch (error) {
      console.error(err);
    }
  }

  return (
    <>
      {!totpEnabled ? (
        <>
          {qrLink !== "" ? <Image src={qrLink} alt="qr" width={200} height={200} /> : null}
          <div>
            If you cannot scan the QR, use this code:
            <pre>
              <code>{totpSecret}</code>
            </pre>
          </div>
          <label htmlFor="code">Enter Verification Code</label>
          <input
            type="text"
            name="code"
            id="code"
            onChange={(e) => {
              setTotpCode(e.target.value);
            }}
          />
          <Button onClick={linkTOTP}>Save</Button>
        </>
      ) : (
        <Button onClick={unlinkTOTP}>Unlink TOTP</Button>
      )}
      <ChangePassword flowID={flowID} csrf_token={csrf_token} />
    </>
  );
};

export default SettingsPage;
