import ButtonSubmit from "../../components/button_submit";
import PasswordValidation from "../../components/passwordValidation";
import Labs from "../../public/images/labs logo.png";
import Image from "next/image";
import Carousel from "../../components/carousel";

const passwordReset = () => {
  return (
<div>
  {/* <div className="split_left">
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
        <PasswordValidation />
      </div>
      <div>
        <ButtonSubmit
          text={"Login"}/>
      </div>
    </div>
  </div> */}
</div>
  );
};

export default passwordReset;


