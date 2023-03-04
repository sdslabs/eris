import React, { useState, useEffect } from 'react';
import axios from "axios";
import ButtonAuth from "../../components/button_auth";
import Icons from "../../components/icons";
import IconsPass from '../../components/icons_pass';
import Labs from "../../public/images/labs logo.png";
import Image from "next/image";
import Carousel from "../../components/carousel";
import Link from "next/link";
import SetPassword from '../../components/setpass';
import Signup from '../../components/register';

const SignupPage = () => {
  const [showSignup, setShowSignup] = useState(true);
  const handleButtonClick = (event) => {
    event.preventDefault()
    setShowSignup(!showSignup);
  };
  return (
    <div>
      <div className="split_left">
        <div className="top">
          <Image src={Labs} alt="labs" />
        </div>
        <div className="centred_img">
          <Carousel />
        </div>
      </div>
      <div className="split_right ">
        <div className='signup'>
        { showSignup ? (
          <div>
            <div>
          <Icons />
          </div>
            <Signup handleClick={handleButtonClick}/>
            </div>
        ):(
          <div>
            <div>
              <IconsPass/>
              </div>
          <SetPassword className='slide-in'/>
          </div>
        )
        }
          </div>
       
      </div>
    </div>
  );
};

export default SignupPage;
