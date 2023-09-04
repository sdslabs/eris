import React from "react";
import Image from "next/image";

const Apps = ({ app_img, app_name}) => {

  return (
    <div className="app_div">
        <div className="app_img"><Image className="app_img" src={app_img} alt="app_img" /></div>
        <p className="app_name"><b>{app_name}</b></p>
    </div>
  );
};

export default Apps;

