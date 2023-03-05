import React, { useState, useEffect } from 'react';
import Icons from "../../components/icons";
import IconsPass from '../../components/icons_pass';
import Labs from "../../public/images/labs logo.png";
import Image from "next/image";
import Carousel from "../../components/carousel";
import SetPassword from '../../components/setpass';
import Signup from '../../components/register';

const SignupPage = () => {
  const [showSignup, setShowSignup] = useState(true);
  const [email, setEmail] = useState('');
  const [tried, setTried] = useState(false);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
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
            <Signup handleClick={handleButtonClick} name={name} email={email} number={number} setEmail={setEmail} setName={setName} setNumber={setNumber} tried={tried} setTried={setTried}/>
            </div>
        ):(
          <div>
            <div>
              <IconsPass/>
              </div>
          <SetPassword className='slide-in' name={name} email={email} number={number} setEmail={setEmail} setName={setName} setNumber={setNumber}/>
          </div>
        )
        }
          </div>
       
      </div>
    </div>
  );
};

export default SignupPage;
