import { React } from "react";
import LeftCarousel from "../../components/LeftCarousel";

function VerifiedPage() {
  return (
    <div>
      <LeftCarousel />
      <div className="split_right ">
        <div className="signup" style={{ marginTop: "20em" }}>
          <div>
            <h1>
              Verification <span className="green">Successful</span>
            </h1>
          </div>
          <div className="form">
            <div>
              <p style={{ fontSize: "1.1em", margin: "1em" }}>Your account has been successfully verified.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifiedPage;
