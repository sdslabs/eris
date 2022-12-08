import Button1 from "../../components/button1";
import Button2 from "../../components/button2";
import Input from "../../components/input_box";
import Labs from "../../public/images/labs logo.png";
import Think from "../../public/images/illustration_think.png";
import Password from "../../components/password";
import Image from "next/image";


const SignupPage = ({ refs }) => {
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
    <div className="signup">
      <div>
        <h1>Sign up</h1>
      </div>
      <div className="form">
        <div>
          <p>Full name</p>
          <Input 
            text="Enter your full name"/>
            <p>Email address</p>
          <Input 
            text="Enter your email address"/>
        </div>
        <div>
          <Button1
            text={"Create account"}
          />
        </div>
        <p>Already have an account? <a className="green underline" href="/login">Log in</a> </p>
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

export default SignupPage;



