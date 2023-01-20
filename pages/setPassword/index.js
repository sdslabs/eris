import Button1 from "../../components/button1";
import Password from "../../components/password";
import Icons from "../../components/icons_pass";
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
    <Icons 
        icon1 = {tick}
        class1 = {"icon_circle_done"}
        i1 = {"white"}
        icon2 = {tick}
        class2 = {"icon_circle_done"}
        i2 = {"white"}
        icon3 = {key} 
        class3 = {"icon_circle_active"}
        i3 = {"green"}
        text1 ={"green"}
        text2 ={"green"}
        text3 ={"green"}
        />
      <div>
        <h1>Set <span className="green">Password</span></h1>
      </div>
      <div className="form">  
        <p>Password</p>
        <Password 
          text={"Your password must contain 8 characters"} />
        <p>Confirm Password</p>
        <Password 
          text={"Re-enter your password"}/>
      </div>
      <div>
        <Button1 
          text={"Confirm"}/>
      </div>
    </div>
  </div>
</div>
  );
};

export default SignupPage;
