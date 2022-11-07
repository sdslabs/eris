import Link from "next/link";
import Button1 from "../../components/button1";
import Button2 from "../../components/button2";
import Input from "../../components/input_box";
import Password from "../../components/password";

const LoginPage = ({ refs }) => {
  return (
    <div className="login">
      <div>
        <h1>Login</h1>
        </div>
      <div className="form">
      <div>
      <p>Email address</p>
        <Input />
        <p>Password</p>
        <Password 
        placeholder={"Enter your password"}/>
      </div>
      <div>
      <input 
      type="checkbox" 
      className="checkbox" 
      />
      <label for="remember">Remember me</label>

      <a className="green" href="#">Forgot password?</a>
      </div>
      <div>
        <Button1
          text={"LOGIN"}
          />
      </div>
      <p>Don't have an account? <a className="green" href="/signup">Sign up</a> </p>
      </div>
      <div className="oauth">
      <Button2
            text={"Continue with Google"}
          />
      </div>
    </div>
  );
};

export default LoginPage;