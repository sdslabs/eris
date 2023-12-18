import ButtonSubmit from "./button_submit";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { useEffect } from "react";

const VerifyEmailPage = ({ email }) => {
  const router = useRouter();
  const redirect = () => {
    router.push("dashboard");
  };

  useEffect(() => {
    sendEmail(email);
  }, [email]);

  function sendEmail(email) {
    axios
      .get(process.env.NEXT_PUBLIC_VERIFY, {
        withCredentials: true,
      })
      .then((response) => {
        axios.post(
          process.env.NEXT_PUBLIC_VERIFY,
          {
            flowID: response.data.flowID,
            csrf_token: response.data.csrf_token,
            email: email,
          },
          {
            withCredentials: true,
          }
        );
      });
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
          <p>An email has been sent to</p>
          <p className="green">{email}</p>
        </div>
        <div>
          <ButtonSubmit text={"Continue to Dashboard"} func={redirect} />
        </div>
        <p>
          Didnt get the email?{" "}
          <Link href={() => sendEmail(email)} className="green underline">
            {" "}
            Resend Email
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
