import Image from "next/image";
import { React, useEffect, useState } from "react";
import { handleGetSettingsFlow, handlePostToggleTOTPFlow } from "../../api/settingsFlow";
import LeftPanel from "../../components/leftPanel";
import UpdateProfileForm from "../../components/updateProfileForm";
import { handleGetSessionDetailsFlow } from "../../api/profileFlow";

function MFAauthentication({ totpEnabled, qrLink, unlinkTOTP, totpSecret, setTotpCode, linkTOTP, totp_code }) {
  return (
    <div>
      <div>
        <h1>
          Multi Factor <span className="green">Authentication</span>
        </h1>
      </div>
      {totpEnabled ? (
        <div>
          <h3 style={{ color: "green" }}>2FA Method is Enabled</h3>
          <button className="button_submit" style={{ marginTop: "0.5em" }} onClick={unlinkTOTP}>
            Disable 2FA
          </button>
        </div>
      ) : (
        <>
          {qrLink !== "" ? <Image src={qrLink} alt="qr" width={200} height={200} /> : null}
          <div>
            If you cannot scan the QR, use this code:{" "}
            <span className="green">
              <code>{totpSecret}</code>
            </span>
          </div>
          <label htmlFor="code">Enter Verification Code</label>
          <input
            type="text"
            name="code"
            text="Enter TOTP Code"
            value={totp_code}
            onChange={(e) => setTotpCode(e.target.value.trim())}
          />
          <button className="button_submit" style={{ marginTop: "0.5em" }} onClick={linkTOTP}>
            Enable 2FA
          </button>
        </>
      )}
    </div>
  );
}

function SettingsPage() {
  const [qrLink, setQrLink] = useState("");
  const [totpSecret, setTotpSecret] = useState("");
  const [flowID, setFlowID] = useState("");
  const [csrf_token, setCsrfToken] = useState("");
  const [totp_code, setTotpCode] = useState("");
  const [totpEnabled, setTotpEnabled] = useState(false);
  const [traits, setTraits] = useState({ name: "", email: "", phone_number: "" });

  useEffect(() => {
    fetchNewQR();
    handleGetTraits();
  }, [totpEnabled]);

  async function handleGetTraits() {
    try {
      const profileTraits = await handleGetSessionDetailsFlow();
      setTraits(profileTraits);
    } catch (error) {
      console.error(error);
    }
  }

  async function linkTOTP() {
    try {
      await handlePostToggleTOTPFlow(flowID, csrf_token, totp_code, false);
      alert("Totp successful");
      setTotpEnabled(true);
      setTotpCode("");
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
      console.error(error);
    }
  }

  return (
    <div>
      <LeftPanel
        page={"user"}
        mode={"dashboard"}
        activity1={"inactive"}
        activity2={"inactive"}
        activity3={"active"}
        state1={"unused"}
        state2={"unused"}
        state3={"used"}
      />
      <div className="right_panel settings_panel">
        <MFAauthentication
          totpEnabled={totpEnabled}
          qrLink={qrLink}
          unlinkTOTP={unlinkTOTP}
          totpSecret={totpSecret}
          setTotpCode={setTotpCode}
          linkTOTP={linkTOTP}
          totp_code={totp_code}
        />

        <UpdateProfileForm flowID={flowID} csrf_token={csrf_token} traits={traits} setTraits={setTraits} />
      </div>
    </div>
  );
}

export default SettingsPage;
