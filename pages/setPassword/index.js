import Button1 from "../../components/button1";
import PasswordValidation from "../../components/passwordValidation";
import Icons from "../../components/icons_pass";
import Labs from "../../public/images/labs logo.png";
import Image from "next/image";
import Carousel from "../../components/carousel";

const setPassword = ({ refs }) => {
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
    <div className="signup">
    <Icons />
      <div>
        <h1>Set <span className="green">Password</span></h1>
      </div>
      <div className="form">  
        <PasswordValidation />
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

export default setPassword;
