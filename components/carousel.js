import React, { useState } from "react";
import Think from "../public/images/illustration_think.svg";
import Build from "../public/images/illustration_build.svg";
import Ship from "../public/images/illustration_ship.svg";
import Slick_think from "../public/images/Slick_think.svg";
import Slick_build from "../public/images/Slick_build.svg";
import Slick_ship from "../public/images/Slick_ship.svg";
import Image from "next/image";

const Carousel = ({ text, type, onClick }) => {

  return (
    <div>
   <div class="img-slider">
  <div class="slider-container">
    
    <div class="slide">
    <Image src={Think} alt="labs" />
    <div className="slick_centre">
    <h1 className="carousel_heading">THINK</h1>
    <Image className="slick" src={Slick_think} alt="labs" />
    </div>
    </div>
    
    <div class="slide">
    <Image src={Build} alt="labs" />
    <div className="slick_centre" style={{"margin-top":"-1rem"}}>
    <h1 className="carousel_heading">BUILD</h1>
    <Image className="slick" src={Slick_build} alt="labs" />
    </div>
    </div>

    <div class="slide">
    <Image src={Ship} alt="labs" />
   <div className="slick_centre">
   <h1 className="carousel_heading">SHIP</h1>
    <Image className="slick" src={Slick_ship} alt="labs" />
   </div>
    </div>
    
  </div>
</div>
    </div>
  );
};

export default Carousel;
