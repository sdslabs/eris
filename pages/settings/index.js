import { React, useState } from "react";
import Image from "next/image";
import { useEffect } from "react";
import axios from "axios";
import { Button, Input } from "@mui/material";

const axiosInstance = axios.create({ withCredentials: true });

function ChangePassword({ flowID, csrf_token }) {
  const [newPassword, setNewPassword] = useState("");

  async function handleChangePassword() {
    const objData = {
      flowID,
      csrf_token,
      password: newPassword,
    };
    const response = await axiosInstance.post(process.env.NEXT_PUBLIC_CHANGE_PASSWORD, objData);
    if (response.status == 200) {
      alert(response.data.status);
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
  const [totp_secret, setTotp_secret] = useState("");
  const [flowID, setFlowID] = useState("");
  const [csrf_token, setCsrfToken] = useState("");
  const [totp_code, setTotpCode] = useState("");
  const [totpEnabled, setTotpEnabled] = useState(false);

  useEffect(() => {
    fetchNewQR();
  }, [totpEnabled]);

  async function verifyTOTP() {
    const objData = { csrf_token, totp_code, flowID, totp_unlink: false };

    const response = await axiosInstance.post(process.env.NEXT_PUBLIC_TOGGLETOTP, objData);
    if (response.data.status == "Totp Toggled") {
      alert("Totp successful");
      setTotpEnabled(true);
    }
  }

  async function unlinkTOTP() {
    const objData = { csrf_token, totp_code, flowID, totp_unlink: true };

    let response = await axiosInstance.post(process.env.NEXT_PUBLIC_TOGGLETOTP, objData);
    if (response.data.status == "Totp Toggled") {
      alert("Totp unlinked successfuly");
      setTotpEnabled(false);
    }
  }

  async function fetchNewQR() {
    let response = await axiosInstance.get(process.env.NEXT_PUBLIC_SETTINGS);
    if (response.data.qr === "" && response.data.totp_secret === "" && response.data.csrf_token !== "") {
      setTotpEnabled(true);
      setCsrfToken(response.data.csrf_token);
      setFlowID(response.data.flowID);
    } else {
      setTotpEnabled(false);
      setQrLink(response.data.qr);
      setCsrfToken(response.data.csrf_token);
      setFlowID(response.data.flowID);
      setTotp_secret(response.data.totp_secret);
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
              <code>{totp_secret}</code>
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
          <Button onClick={verifyTOTP}>Save</Button>
        </>
      ) : (
        <Button onClick={unlinkTOTP}>Unlink TOTP</Button>
      )}
      <ChangePassword flowID={flowID} csrf_token={csrf_token} />
    </>
  );
};

export default SettingsPage;
