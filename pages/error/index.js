import Link from "next/link";
import { useRouter } from "next/router";
import { React, useState } from "react";
import Image from "next/image";
import errImage from "../../public/images/errImage.png"
import Labs from "../../public/images/labs logo.png";

const ErrorPage = () => {

  const router = useRouter();

  function redirect(traits) {
    if (traits) {
      router.push("dashboard");
    } else {
      router.push("confidential");
    }
  }

  return (
    <div className="loginpage">
      <div className="split_left">
      <div className="top">
        <Image src={Labs} alt="labs" />
      </div>
      <div className="centred_img">
      <Image src={errImage} alt="labs" />
      </div>
    </div>
      <div className="split_right ">
        <div className="login">
          <div style={{fontSize: "6rem", textAlign: "center"}}>
              40<span className="green">4</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
