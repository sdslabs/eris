import ButtonSubmit from "../../components/button_submit";
import PasswordValidation from "../../components/passwordValidation";
import Icons from "../../components/icons_pass";
import Labs from "../../public/images/labs logo.png";
import Image from "next/image";
import Carousel from "../../components/carousel";

const SetPasswordPage = () => {
  // e.preventDefault();
  //   const response=await axios.get("http://localhost:9898/register",{withCredentials: true})
  //   setFlowID(response.flowID)
  //   setCsrfToken(response.csrf_token)
  //   console.log("cookie dekh")
  return (
<div>
  <div className="split_left">
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
        <ButtonSubmit
          text={"Confirm"}/>
      </div>
    </div>
  </div>
</div>
  );
};

export default SetPasswordPage;
