import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ButtonSubmit from "./button_submit";
import IconsVerify from "./icons_verify";

const axiosInstance = axios.create({ withCredentials: true });

const VerifyEmailPage = ({ email }) => {
  const router = useRouter();
  const redirect = () => {
    router.push("dashboard");
  };

  useEffect(() => {
    sendEmail(email);
  }, [email]);

  async function sendEmail(email) {
    try {
      let response = await axiosInstance.get(process.env.NEXT_PUBLIC_VERIFY);
      const objData = {
        flowID: response.data.flowID,
        csrf_token: response.data.csrf_token,
        email,
      };
      response = await axiosInstance.post(process.env.NEXT_PUBLIC_VERIFY, objData);

      if (response.status == 200) {
        alert(response.data.message);
      } else {
        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <IconsVerify />
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
            <span className="green underline" onClick={() => sendEmail(email)}>
              Resend Email
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
