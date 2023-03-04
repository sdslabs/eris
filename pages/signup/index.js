import React, { useState, useEffect } from 'react';
import axios from "axios";
import ButtonAuth from "../../components/button_auth";
import Icons from "../../components/icons";
import Labs from "../../public/images/labs logo.png";
import Image from "next/image";
import Carousel from "../../components/carousel";
import Link from "next/link";
import SetPassword from '../../components/setpass';
import Signup from '../../components/register';

const SignupPage = () => {
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
        <Signup />
      </div>
    </div>
  );
};

export default SignupPage;
