import Image from "next/image";
import Labs from "@/public/images/labs logo.png";
import Carousel from "./carousel";
import Link from "next/link";

function LeftCarousel() {
  return (
    <div className="split_left">
      <div className="top">
        <Link href="/">
          <Image src={Labs} alt="labs" />
        </Link>
      </div>
      <div className="centred_img">
        <Carousel />
      </div>
    </div>
  );
}

export default LeftCarousel;
