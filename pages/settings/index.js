import { React, useState } from "react";
import Image from "next/image";
import { useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";

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

  function verifyTOTP() {
    const objData = { csrf_token, totp_code, flowID, method: "totp", totp_unlink: false };

    axios
      .post(process.env.NEXT_PUBLIC_TOGGLETOTP, objData, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        if (response.data.status == "Totp Toggled") {
          alert("Totp successful");
          setTotpEnabled(true);
        }
      });
  }

  function unlinkTOTP() {
    const objData = { csrf_token, totp_code, flowID, method: "totp", totp_unlink: true };
    console.log(objData);

    axios
      .post(process.env.NEXT_PUBLIC_TOGGLETOTP, objData, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        if (response.data.status == "Totp Toggled") {
          alert("Totp unlinked successfuly");
          setTotpEnabled(false);
        }
      });
  }

  function fetchNewQR() {
    axios
      .get(process.env.NEXT_PUBLIC_SETTINGS, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);

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
      });
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
          <label for="code">Enter Verification Code</label>
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
    </>
  );
};

export default SettingsPage;
