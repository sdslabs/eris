import Image from "next/image";
import Labs from "./../public/images/labs logo.png";
import Carousel from "./carousel";

function LeftCarousel() {
  return (
    <div className="split_left">
      <div className="top">
        <Image src={Labs} alt="labs" />
      </div>
      <div className="centred_img">
        <Carousel />
      </div>
    </div>
  );
}

export default LeftCarousel;
