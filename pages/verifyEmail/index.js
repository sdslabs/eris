
import Button1 from "../../components/button1";
import Input from "../../components/input_box";
import Icons from "../../components/icons_verify";
import Labs from "../../public/images/labs logo.png";
import Think from "../../public/images/illustration_think.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faCheckCircle, faCheck} from "@fortawesome/free-solid-svg-icons";
const user = <FontAwesomeIcon icon={faUser} />;
const key = <FontAwesomeIcon icon={faKey} />;
const verify = <FontAwesomeIcon icon={faCheckCircle} />;
const tick = <FontAwesomeIcon icon={faCheck} />;

const SignupPage = ({ refs }) => {
  return (
<div>
  <div className="split_left carousel">
    <div className="top">
      <Image src={Labs} alt="labs" />
    </div>
    <div className="centred_img">
      <Image src={Think} alt="think" />
    </div>
  </div> 
  <div className="split_right ">
    <div className="signup">
    <Icons />
      <div>
        <h1>Email <span className="green">Verification</span></h1>
      </div>
      <div className="form">
        <div>
        <p>An email has been sent to</p>
        <p className="green">test@gmail.com</p>
        <p className="otp">OTP</p>
        <Input />
          <p>Didnt't get the otp? <a href="#" className="green underline"> Resend OTP</a> </p>
        </div>
        <div>
          <Button1
            text={"Create account"}
          />
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default SignupPage;
