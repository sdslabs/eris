import Button1 from "../../components/button1";
import Button2 from "../../components/button2";
import Input from "../../components/input_box";
import Password from "../../components/password";
import Labs from "../../public/images/labs logo.png";
import Image from "next/image";
import Carousl from "../../components/carousel";

const LoginPage = ({ refs }) => {
return (
<div className="loginpage">
  <div className="split_left">
    <div className="top">
      <Image src={Labs} alt="labs" />
    </div>
    <div className="centred_img">
      <Carousl />
    </div>
  </div>
  <div className="split_right ">
    <div className="login">
      <div>
        <h1>Log<span className="green">in</span></h1>
      </div>
      <div className="form">
        <div>
        <p>Email address</p>
        <Input 
          text="Enter your email address"/>
          <p>Password</p>
        <Password 
          text="Enter your password"/>
        </div>
        <div className="tickBox">
          <input 
            type="checkbox" 
            className="checkbox" 
          />
          <label className="remember">Remember me</label>
          <a className=" underline green" href="/recover" style={{float: "right"}}>
            Forgot password?
          </a>
        </div>
        <div>
          <Button1
            text={"Login"}
          />
        </div>
          <p> 
            Don't have an account? <a className="green underline" href="/signup">
            Sign up </a>
          </p>
          <table className="or">
            <tbody>
              <tr>
                <td><hr className="option_hr"/></td>
                <td>OR</td>
                <td><hr className="option_hr" /></td>
              </tr>
            </tbody>
          </table>
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