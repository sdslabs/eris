import Image from "next/image";
import { useState } from "react";
import { handleGetRecoveryFlow, handlePostRecoveryFlow } from "../../api/recoveryFlow";
import ButtonSubmit from "../../components/button_submit";
import Carousel from "../../components/carousel";
import Input from "../../components/input_box";
import Labs from "../../public/images/labs logo.png";

function LeftSide() {
  return (
    <div className="split_left">
      <div className="top">
        <Image src={Labs} alt="labs" />
      </div>
      <div className="centred_img">
        <Carousel />
      </div>
    </div>
  );
}

const RecoveryPage = () => {
  const [email, setEmail] = useState("");

  async function handleSendRecoveryLink() {
    try {
      const { flowID, csrf_token } = await handleGetRecoveryFlow();
      const res = await handlePostRecoveryFlow(flowID, csrf_token, email);
      if (res == "Mail sent with recovery link") {
        alert(res);
      } else {
        alert("Some error occurred");
      }
    } catch (error) {
      console.error(error);
      alert("Some error occurred");
    }
  }

  return (
    <div>
      <LeftSide />
      <div className="split_right">
        <div className="login">
          <div>
            <h1>
              Reset <span className="green">Password</span>
            </h1>
          </div>
          <div className="form">
            <div>
              <p>Email address</p>
              <Input
                type={"Email"}
                text={"Enter your registered email address"}
                handleChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <ButtonSubmit text={"Send reset link"} email={email} func={handleSendRecoveryLink} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecoveryPage;
