import Link from "next/link";
import Button1 from "../../components/button1";
import Button2 from "../../components/button2";
import Input from "../../components/input_box";
import Password from "../../components/password";
import Think from "../../public/images/illustration_think.png";
import Labs from "../../public/images/labs logo.png";
import Image from "next/image";

const LoginPage = ({ refs }) => {
return (
<div>
  <div className="split_left carousel">
    <div className="top">
      <Image src={Labs} alt="labs" />
    </div>
    <div className="centred_img">
      <Image src={Think} alt="think" />
    </div>
  </div>
  <div className="split_right ">
    <div className="login">
      <div>
        <h1>Login</h1>
      </div>
      <div className="form">
        <div>
        <p>Email address</p>
        <Input 
          //type={email}
          text="Enter your email address"/>
          <p>Password</p>
        <Password 
          text="Enter your password"/>
        </div>
        <div>
          <input 
            type="checkbox" 
            className="checkbox" 
          />
          <label for="remember">Remember me</label>
          <a className="green underline" href="/recover">Forgot password?</a>
        </div>
        <div>
          <Button1
            text={"Login"}
          />
        </div>
          <p>Don't have an account? <a className="green underline" href="/signup">Sign up</a> </p>
      </div>
        <div className="oauth">
          <Button2
            text={"Continue with Google"}
          />
      </div>
    </div>
  </div>
</div>
  );
};

export default LoginPage;