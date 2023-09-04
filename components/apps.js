import React from "react";
import Image from "next/image";

const Apps = ({ img, name}) => {

  return (
    <div className="app_div">
        <div className="app_img"><Image className="app_img" src={img} alt="app_img" /></div>
        <p className="app_name"><b>{name}</b></p>
    </div>
  );
};

export default Apps;

