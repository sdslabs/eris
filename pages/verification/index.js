import { React } from "react";
import LeftCarousel from "@/components/LeftCarousel";

const VerificationSuccessPage = () => {
  return (
    <div className="loginpage">
      <LeftCarousel/>
      <div className="split_right ">
        <div className="login">
        <div style={{fontSize: "3rem", textAlign: "center"}}>
              Verification<span className="green"> Successful!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationSuccessPage;
