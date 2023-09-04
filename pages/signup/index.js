import { React, useState } from 'react';
import Icons from "../../components/icons";
import IconsPass from '../../components/icons_pass';
import IconsVerify from '../../components/icons_verify';
import Labs from "../../public/images/labs logo.png";
import Image from "next/image";
import Carousel from "../../components/carousel";
import SetPassword from '../../components/setpass';
import Signup from '../../components/register';
import Verify from '../../components/verifyEmail';

const SignupPage = () => {
  const [showSignup, setShowSignup] = useState(true);
  const [showPasswordScreen, setShowPasswordScreen] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleButtonClick = (event) => {
    event.preventDefault()
    setShowSignup(!showSignup);
  };
  const handlePasswordButton = (event) => {
    event.preventDefault()
    setShowPasswordScreen(!showPasswordScreen);
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
        {(() => {
        if (showSignup) {
          return (
            <div>
              <div>
                <Icons />
              </div>
              <Signup handleClick={handleButtonClick} name={name} email={email} number={number} setEmail={setEmail} setName={setName} setNumber={setNumber}/>
            </div>
          )
        } else if (!showSignup && showPasswordScreen) {
          return (
            <div>
              <div>
                <IconsPass/>
              </div>
              <SetPassword handleClick={handlePasswordButton} className='slide-in' name={name} email={email} number={number} setEmail={setEmail} setName={setName} setNumber={setNumber}/>
            </div>
          )
        } else {
          return (
            <div>
              <div>
                <IconsVerify/>
              </div>
              <Verify className='slide-in' email={email}/>
            </div>
          )
        }
      })()}
          </div>
      </div>
    </div>
  );
};

export default SignupPage;
