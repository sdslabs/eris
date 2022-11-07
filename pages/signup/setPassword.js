import Button1 from "../../components/button1";
import Password from "../../components/password";

const SignupPage = ({ refs }) => {
  return (
    <div className="signup">
      <div>
        <h1>Set Password</h1>
        </div>
        <div className="form">
      
      <p>Password</p>
        <Password 
        placeholder={"Your password must contain 8 characters"} />
        <p>Confirm Password</p>
        <Password 
        placeholder={"Re-enter your password"}/>
      </div>
      <div>
        <Button1 
        text={"Confirm"}/>
      </div>
    </div>
  );
};

export default SignupPage;
