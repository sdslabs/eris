import ButtonSubmit from "../../components/button_submit";
import Input from "../../components/input_box";
import Labs from "../../public/images/labs logo.png";
import Image from "next/image";
import Carousel from "../../components/carousel";
import { useEffect, useState } from "react";
import axios from "axios";

const axiosInstance = axios.create({ withCredentials: true });

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

  function handleSendRecoveryLink() {
    console.log(email);
    axiosInstance.get(process.env.NEXT_PUBLIC_RECOVERY).then((response) => {
      const objData = {
        flowID: response.data.flowID,
        csrf_token: response.data.csrf_token,
        email,
      };
      axiosInstance.post(process.env.NEXT_PUBLIC_RECOVERY, objData).then((response) => {
        if (response.data.message == "Mail sent with recovery link") {
          alert(response.data.message);
        } else {
          console.log(response.data);
          alert("Some error occurred");
        }
      });
    });
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
              <ButtonSubmit text={"Send reset link"} func={handleSendRecoveryLink} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecoveryPage;
