import React from "react";
import Think from "../public/images/illustration_think.svg";
import Build from "../public/images/illustration_build.svg";
import Ship from "../public/images/illustration_ship.svg";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Caro = () => {

  return (

      <Carousel interval={2000} autoPlay infiniteLoop showArrows={false} showStatus={false} showThumbs={false}>
        <div className="slide">
          <Image src={Think} alt="labs" />
          <div className="slick_centre">
          <h1 className="carousel_heading">THINK</h1>
          </div>
        </div>

        <div className="slide">
          <Image src={Build} alt="labs" />
          <div className="slick_centre" style={{"marginTop":"-1rem"}}>
          <h1 className="carousel_heading">BUILD</h1>
        </div>
      </div>

      <div className="slide">
        <Image src={Ship} alt="labs" />
        <div className="slick_centre">
          <h1 className="carousel_heading">SHIP</h1>
        </div>
      </div>
    </Carousel>
  );
};

export default Caro;
