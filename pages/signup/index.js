import Button1 from "../../components/button1";
import Button2 from "../../components/button2";
import Input from "../../components/input_box";
import Password from "../../components/password";

const SignupPage = ({ refs }) => {
  return (
    <div className="signup">
      <div>
        <h1>Sign up</h1>
        </div>
      <div className="form">
      <div>
      <p>Full name</p>
        <Input />
        <p>Email address</p>
        <Input />
      </div>
      <div>
        <Button1
          text={"Create account"}
          />
      </div>
      <p>Already have an account? <a className="green" href="/login">Log in</a> </p>
      </div>
      <div className="oauth">
      <Button2
            text={"Continue with Google"}
          />
      </div>
    </div>
  );
};

export default SignupPage;



