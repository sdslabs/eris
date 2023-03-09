import ButtonSubmit from "./button_submit";
import { useRouter } from "next/router";
import Link from "next/link";

const VerifyEmailPage = ({email}) => {

const router = useRouter();
const redirect = () =>{
  router.push('dashboard');
}

  return (
<div className="slide-in">
      <div>
        <h1>Email <span className="green">Verification</span></h1>
      </div>
      <div className="form">
        <div>
        <p>An email has been sent to</p>
        <p className="green">{email}</p>
        </div>
        <div>
          <ButtonSubmit
            text={"Continue to Dashboard"} func={redirect}
          />
        </div>
        <p>Didnt get the email? <Link href="#" className="green underline"> Resend Email</Link> </p>
      </div>
</div>
  );
};

export default VerifyEmailPage;
