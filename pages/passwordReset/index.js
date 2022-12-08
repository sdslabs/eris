import Button1 from "../../components/button1";
import Password from "../../components/password";

const LoginPage = ({ refs }) => {
  return (
    <div className="login">
      <div>
        <h1>Password Reset</h1>
        </div>
        <div className="form">
      <p>New password</p>
        <Password 
        placeholder={"Enter your new password"} />
        <p>Confirm Password</p>
        <Password 
            placeholder={"Re-enter your password"}/>
      </div>
      <div>
        <Button1 
        text={"Login"}/>
      </div>
    </div>
  );
};

export default LoginPage;


