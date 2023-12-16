import { React, useState } from "react";
import Image from "next/image";
import { useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

const SettingsPage = () => {
  const [flowID, setFlowID] = useState("");
  const [csrf_token, setCsrfToken] = useState("");
  const [totp_code, setTotpCode] = useState("");

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_MFA, {
        withCredentials: true,
      })
      .then((response) => {
        setCsrfToken(response.data.csrf_token);
        setFlowID(response.data.flowID);
      });
  }, []);

  function verifyTOTP() {
    const objData = { csrf_token, totp: totp_code, flowID };

    axios
      .post(process.env.NEXT_PUBLIC_MFA, objData, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.status == "MFA Successful") {
          console.log("MFA Successful");
          router.push("dashboard");
        } else {
          alert(`ERROR:MFA Failed`);
        }
      });
  }
  const router = useRouter();

  return (
    <>
      <label htmlFor="code">Enter TOTP Code</label>
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
  );
};

export default SettingsPage;
