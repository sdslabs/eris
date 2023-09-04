import React from "react";
import Test from "../public/images/test.jpg";
import Export from "../public/images/export.svg"
import Image from "next/image";
import Link from "next/link";

const AppBox = ({ img, name, des, href }) => {

  return (
    <div className="app_box">
        <div className="app_image"><Image className="app_image" src={img} alt="test" /></div>
        <div className="app_data">
            <p className="app_name" style={{marginTop:"5px"}}><b>{name}</b></p>
            <p className="app_description">{des}</p>
            <p className="green underline"><Link target={"_blank"} href={href}>{href}</Link><Image src={Export} alt="export"/></p>
        </div>
    </div>
  );
};

export default AppBox;

