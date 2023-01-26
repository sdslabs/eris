import Button1 from "../components/button1";
import Button2 from "../components/button2";
import Input from "../components/input_box";
import Password from "../components/password";
import Labs from "../public/images/labs logo.png";
import Image from "next/image";
import Carousel from "../components/carousel";
// import { useState,useEffect } from 'react';
// import axios from 'axios';
// import express from 'express';
// import cors from 'cors';
// var app = express()
 
// app.use(cors())

const LoginPage = () => {

// async function postDataToAPI(csrfToken, flowID, email, password) {
//     try {
//         const response = await axios.post('https://0.0.0.0:9999/login', csrfToken, flowID, email, password);
//         console.log(response.csrfToken, response.flowID, response.email, response.password);
//     } catch (error) {
//         console.error(error);
//     }
// }

// useEffect(() =>{
//  const createFLow= async ()=>{
//   const response=await fetch('http://0.0.0.0:9999/login')
//   console.log(response.headers)
//  }
//  createFLow()
// }, []);

return (
  
<div className="loginpage">
  <div className="split_left">
    <div className="top">
      <Image src={Labs} alt="labs" />
    </div>
    <div className="centred_img">
      <Carousel />
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
            //onclick={postDataToAPI}
            //onclick={Example}
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