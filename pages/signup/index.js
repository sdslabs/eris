import Button1 from "../../components/button1";
import Button2 from "../../components/button2";
import Input from "../../components/input_box";
import Icons from "../../components/icons";
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
      <div className="icons">
      <Icons />
      </div>
      <div>
        <h1>Sign <span className="green">up</span></h1>
      </div>
      <div className="form">
        <div>
          <p>Full name</p>
          <Input 
            text="Enter your full name"/>
            <p>Email address</p>
          <Input 
            text="Enter your email address"/>
        </div>
        <div>
          <Button1
            text={"Create account"}
          />
        </div>
        <p>Already have an account? <a className="green underline" href="/login">Log in</a> </p>
      </div>
      <table className="or"><tbody><tr><td><hr className="option_hr"/></td><td>OR</td><td><hr className="option_hr"/></td></tr></tbody></table>
      <div className="oauth">
        <Button2
        text={"Continue with Google"}
        />
      </div>
    </div>
  </div>
</div>
  );
};

export default SignupPage;



