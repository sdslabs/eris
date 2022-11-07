
import Button1 from "../../components/button1";
import Button2 from "../../components/button2";
import Input from "../../components/input_box";
import Password from "../../components/password";

const LoginPage = ({ refs }) => {
  return (
    <div className="signup">
      <div>
        <h1>Reset Password</h1>
        </div>
      <div className="form">
      <div>
        <p>Email address</p>
        <Input />
      </div>
      <div>
        <Button1
          text={"Send reset link"}
        />
      </div>
      </div>
      
    </div>
  );
};

export default LoginPage;

