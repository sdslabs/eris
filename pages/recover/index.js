import { useState } from "react";
import { handleGetRecoveryFlow, handlePostRecoveryFlow } from "../../api/recoveryFlow";
import LeftCarousel from "../../components/LeftCarousel";
import ButtonSubmit from "../../components/button_submit";
import Input from "../../components/input_box";

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
      <LeftCarousel />
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
                value={email}
                text={"Enter your registered email address"}
                handleChange={(e) => setEmail(e.target.value.trim())}
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
