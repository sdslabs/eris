import React from "react";
import Think from "../public/images/illustration_think.svg";
import Build from "../public/images/illustration_build.svg";
import Ship from "../public/images/illustration_ship.svg";
import Slick_think from "../public/images/Slick_think.svg";
import Slick_build from "../public/images/Slick_build.svg";
import Slick_ship from "../public/images/Slick_ship.svg";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Carousl = ({ text, type, onClick }) => {

  return (

      <Carousel interval={2000} autoPlay infiniteLoop showArrows={false} showStatus={false} showThumbs={false}>
        <div class="slide">  
          <Image src={Think} alt="labs" />
          <div className="slick_centre">
          <h1 className="carousel_heading">THINK</h1>
          </div>
        </div>
        
        <div class="slide">
          <Image src={Build} alt="labs" />
          <div className="slick_centre" style={{"margin-top":"-1rem"}}>
          <h1 className="carousel_heading">BUILD</h1>
          </div>
        </div>

        <div class="slide">
          <Image src={Ship} alt="labs" />
          <div className="slick_centre">
          <h1 className="carousel_heading">SHIP</h1>
          </div>
        </div>
      </Carousel>

  );
};

export default Carousl;
