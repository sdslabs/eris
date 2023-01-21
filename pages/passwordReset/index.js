import Button1 from "../../components/button1";
import Password from "../../components/password";
import Labs from "../../public/images/labs logo.png";
import Image from "next/image";
import Carousel from "../../components/carousel";

const LoginPage = ({ refs }) => {
  return (
<div>
  <div className="split_left carousel">
    <div className="top">
      <Image src={Labs} alt="labs" />
    </div>
    <div className="centred_img">
    <Carousel />
    </div>
  </div>
  <div className="split_right ">
    <div className="login">
      <div>
        <h1>Password <span className="green">Reset</span></h1>
      </div>
      <div className="form">
        <p>New password</p>
        <Password 
          text={"Enter your new password"} />
        <p>Confirm Password</p>
        <Password 
          text={"Re-enter your password"}/>
      </div>
      <div>
        <Button1 
          text={"Login"}/>
      </div>
    </div>
  </div>
</div>
  );
};

export default LoginPage;


