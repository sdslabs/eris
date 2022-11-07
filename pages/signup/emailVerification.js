
import Button1 from "../../components/button1";
import Input from "../../components/input_box";

const SignupPage = ({ refs }) => {
  return (
    <div className="signup">
      <div>
        <h1>Email Verification</h1>
        </div>
      <div className="form">
      <div>
      <p>An email has been sent to</p>
      <p className="green">dfvgbhnm,</p>
        <Input />
      <p>Didnt't get the otp? <a href="#" className="green">Resend OTP</a> </p>
      </div>
      <div>
        <Button1
          text={"Create account"}
          />
      </div>
    </div>
    </div>
  );
};

export default SignupPage;
