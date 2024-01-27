import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { React, useEffect, useState } from "react";
import { handleGetSettingsFlow, handlePostToggleTOTPFlow } from "../../api/settingsFlow";
import Carousel from "../../components/carousel";
import Labs from "../../public/images/labs logo.png";

function SettingsPage() {
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
    <div>
      <div className="split_left">
        <div className="top">
          <Image src={Labs} alt="labs" />
        </div>
        <div className="centred_img">
          <Carousel />
        </div>
      </div>
      <div className="split_right" style={{ display: "block" }}>
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
        <div>
          <Link href="/passwordReset">Change Password</Link>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
